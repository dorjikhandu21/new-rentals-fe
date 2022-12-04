import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {
  CredentialsService,
  NotificationService,
  RolesEnum,
  SharedFacadeService,
  SharedStoreStateEnum,
  User
} from "@new-rentals/shared";
import {tap} from "rxjs";
import {AuthService} from "@new-rentals/auth";

@Component({
  selector: 'new-rentals-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  authenticated: boolean = this.credentials.isAuthenticated();
  currentUser?: User;
  currentActiveLink?:string;
  shouldShowSearchBar?:boolean;
  profile?: User;

  @Input() navBar?:{ name: string, link: string}[];

  navs: { name: string, icon: string, routerLink: string, authorized: RolesEnum[]  }[] = [
    {name: 'Home', icon: 'home', routerLink: '/home', authorized: [RolesEnum.USER, RolesEnum.TENANT, RolesEnum.OWNER]},
    {name: 'Tenants', icon: 'group', routerLink: '/users', authorized: [RolesEnum.OWNER]},
    {name: 'Properties', icon: 'domain', routerLink: '/properties', authorized: [RolesEnum.OWNER]},
    {name: 'Maintenance', icon: 'control_camera', routerLink: '/maintenance', authorized: [RolesEnum.TENANT, RolesEnum.OWNER]},
    {name: 'Payments', icon: 'payments', routerLink: '/payments', authorized: [RolesEnum.OWNER]},
    {name: 'Application', icon: 'app_registration', routerLink: '/applications', authorized: [RolesEnum.OWNER]}];

  constructor(private router: Router, private route: ActivatedRoute, private sharedFacadeService: SharedFacadeService, private authService: AuthService, private credentials: CredentialsService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.currentUser = this.credentials.currentUser();
    this.sharedFacadeService.getCurrentUserProfile(this.currentUser?.id).subscribe();
    this.listenToSearchBarToggle();
    this.listenToProfile();
  }

  routeToAuth(path: string): void {
    this.router.navigate([`auth/${path}`], {});
  }

  listenToSearchBarToggle(): void {
    this.sharedFacadeService.specificStateChange<boolean>(SharedStoreStateEnum.SHOW_SEARCH_BAR).pipe(tap(value => {
      this.shouldShowSearchBar = value;
    })).subscribe();
  }


  listenToProfile(): void {
    this.sharedFacadeService.specificStateChange<User>(SharedStoreStateEnum.CURRENT_USER_PROFILE).pipe(tap((user) => {
      this.profile = user
    })).subscribe()
  }

  logOut(): void {
    this.authService.logOut().toPromise().then(() => {
      this.notificationService.success('Logged out successfully');
      this.router.navigate(['/home']);
    })
    // void this.credentials.logout().toPromise().then(() => {
    //   this.notificationService.success('Logged out successfully');
    //   window.location.reload();
    // });
  }
/*  navOpen(): void {
    this.navToggle.emit(true);
    this.isOpen = !this.isOpen;
  }*/
}
