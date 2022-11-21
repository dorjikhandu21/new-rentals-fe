import {Injectable} from "@angular/core";
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {CredentialsService, NotificationService} from "@new-rentals/shared";
import {Router} from "@angular/router";
import {first, switchMap} from "rxjs";
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private credentialsService: CredentialsService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Filter your endpoint in order to only edit the graphql-related requests
    if (req.url.indexOf('/graphql') > -1) {
      // Get your jwt from your usual source, can be a facade, a service, or even sync data like localStorage
      return this.credentialsService.token()
        .pipe(
          // Make sure the request won't replay when your token gets updated
          first(),
          switchMap(idToken => {
            const token = JSON.parse(idToken);
            const clone = req.clone({
              setHeaders: {
                //@ts-ignore
                Authorization: `${token.token}`
              }
            });
            // And you're done !
            return next.handle(clone);
          })
        );
    }
    // If it's not a graphql request, just give it to the next handler.
    return next.handle(req);
  }

}
