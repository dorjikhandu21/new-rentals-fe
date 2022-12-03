import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CredentialsService, NotificationService, RolesEnum, User} from "@new-rentals/shared";
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
/*
  isOpen = true;
*/

  // @ts-ignore
/*
  @Output() navToggle: EventEmitter<boolean> = new EventEmitter<boolean>(true);
*/

  @Input() navBar?:{ name: string, link: string}[];

  navs: { name: string, icon: string, routerLink: string, authorized: RolesEnum[]  }[] = [
    {name: 'Dashboard', icon: 'insert_chart_outlined', routerLink: '/dashboard', authorized: [RolesEnum.USER, RolesEnum.TENANT, RolesEnum.OWNER]},
    {name: 'Tenants', icon: 'group', routerLink: '/users', authorized: [RolesEnum.OWNER]},
    {name: 'Properties', icon: 'domain', routerLink: '/properties', authorized: [RolesEnum.OWNER]},
    {name: 'Maintenance', icon: 'control_camera', routerLink: '/maintenance', authorized: [RolesEnum.TENANT, RolesEnum.OWNER]},
    {name: 'Payments', icon: 'payments', routerLink: '/payments', authorized: [RolesEnum.OWNER]},
    {name: 'Application', icon: 'app_registration', routerLink: '/applications', authorized: [RolesEnum.OWNER]}];

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private credentials: CredentialsService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.currentUser = this.credentials.currentUser();
  }

  routeToAuth(path: string): void {
    this.router.navigate([`auth/${path}`], {});
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
