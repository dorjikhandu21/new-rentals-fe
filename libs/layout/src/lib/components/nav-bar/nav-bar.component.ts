import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CredentialsService, NotificationService, User} from "@new-rentals/shared";

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

  navs: { name: string, icon: string, routerLink: string }[] = [
    {name: 'Dashboard', icon: 'insert_chart_outlined', routerLink: '/dashboard',},
    {name: 'Tenants', icon: 'group', routerLink: '/users'},
    {name: 'Properties', icon: 'domain', routerLink: '/properties'},
    {name: 'Maintenance', icon: 'control_camera', routerLink: '/maintenance'},
    {name: 'Payments', icon: 'payments', routerLink: '/payments'},
    {name: 'Application', icon: 'app_registration', routerLink: '/applications'}];

  constructor(private router: Router, private route: ActivatedRoute, private credentials: CredentialsService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.currentUser = this.credentials.currentUser();
  }

  routeToAuth(path: string): void {
    this.router.navigate([`auth/${path}`], {});
  }

  logOut(): void {
    void this.credentials.logout().toPromise().then(() => {
      this.notificationService.success('Logged out successfully');
      void this.router.navigate(['/home']);
    });
  }
/*  navOpen(): void {
    this.navToggle.emit(true);
    this.isOpen = !this.isOpen;
  }*/
}
