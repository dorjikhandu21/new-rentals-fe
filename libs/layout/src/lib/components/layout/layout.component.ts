import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute, Router} from "@angular/router";
import {CredentialsService, NotificationService} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  @ViewChild(MatSidenav, { static: false })sideNav: MatSidenav;

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
  };
  navBar: { name: string, link: string, icon: string}[] = [
    {name: 'Featured Apartments', link: 'featured-apartments', icon: 'home'},
    {name: 'Rental Solution', link: 'rental-solution', icon: 'check-circle'},
    {name: 'Main Service', link: 'main-services', icon: 'arrows-alt'},
    {name: 'FAQ', link: 'faq', icon: 'question-circle'},
    {name: 'Contact Us', link: 'contact-us', icon: 'phone'},
  ];


  authenticated: boolean = this.credentials.isAuthenticated();
  currentActiveLink?:string;
  isOpen = true;

  // @ts-ignore

  navs: { name: string, icon: string, routerLink: string }[] = [
    {name: 'Dashboard', icon: 'insert_chart_outlined', routerLink: '/dashboard',},
    {name: 'Tenants', icon: 'group', routerLink: '/users'},
    {name: 'Properties', icon: 'domain', routerLink: '/properties'},
    {name: 'Maintenance', icon: 'control_camera', routerLink: '/maintenance'},
    {name: 'Payments', icon: 'payments', routerLink: '/payments'},
    {name: 'Application', icon: 'app_registration', routerLink: '/applications'}];

  constructor(private router: Router, private route: ActivatedRoute, private credentials: CredentialsService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.center = {lat: 27.4716, lng: 89.6386};
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    // });
  }

  mapClick(event: any): void {
    debugger
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
}
