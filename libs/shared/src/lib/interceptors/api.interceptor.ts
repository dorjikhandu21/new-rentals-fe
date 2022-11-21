import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse
} from "@angular/common/http";
import {CredentialsService, NotificationService} from "@new-rentals/shared";
import { get } from 'lodash-es';
import {Router} from "@angular/router";
import {first, switchMap, tap, catchError, throwError} from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private credentialsService: CredentialsService,
  ) {}

  // eslint-disable-next-line max-lines-per-function
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    // Filter your endpoint in order to only edit the graphql-related requests
    if (req.url.indexOf('/graphql') > -1) {
      return this.credentialsService.token()
        .pipe(
          // Make sure the request won't replay when your token gets updated
          first(),
          switchMap(idToken => {
            const clone = req.clone({
              setHeaders: {
                //@ts-ignore
                Authorization: `${JSON.parse(idToken).token}`
              }
            });
            return next.handle(clone).pipe(tap((event) => {
              this.handleGraphqlResponse(event);
            }),
              catchError((errorResponse: HttpErrorResponse) => {
                return this.handleErrorResponse(errorResponse);
              }));
          })
        );
    }
    // If it's not a graphql request, just give it to the next handler.
    return next.handle(req).pipe( catchError((error) => {
      return this.handleErrorResponse(error)
    }));
  }

  private handleGraphqlResponse(event: HttpEvent<any>): void {
    if (event instanceof HttpResponse) {
      if (event.status >= 200 && event.status <= 400 && get(event, 'body.errors.length') && event?.url?.includes('graphql')) {
        const messages = get(event, 'body.errors').map((error: any) => error.message || error);
        this.notificationService.error(messages);
      }
    }
  }

  private handleErrorResponse(errorResponse: HttpErrorResponse): any {
    if (errorResponse?.url?.split('/').includes('graphql') && get(errorResponse, 'error.error')) {
      return throwError(this.displayErrors([errorResponse.error.error]));
    } else {
      const errors = get(errorResponse, 'error');
      if (errors && Array.isArray(errors)) {
        return throwError(this.displayErrors(errors));
      } else if (errors && typeof errors === 'string') {
        this.notificationService.error(errors);
        return throwError(errors);
      } else if (get(errorResponse, 'error.error') && get(errorResponse, 'error.error').indexOf('Signature') > -1) {
        this.credentialsService.setCredentials();
        this.credentialsService.clearVersionOneStorage();
        this.router.navigate(['auth']);
        window.location.reload();
      } else {
        this.notificationService.error(errors.error);
        return throwError(errorResponse);
      }
    }
  }

  private displayErrors(errors: string[]): string {
    let displayError = '';
    errors.forEach(err => displayError += ` ${err['message'] ? err['message'] : err}`);
    this.notificationService.error(displayError);
    return displayError;
  }

}
