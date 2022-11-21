import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CredentialsService} from "@new-rentals/shared";

@Component({
  selector: 'new-rentals-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  authenticated: boolean = this.credentials.isAuthenticated();
  navs: any[] = [
    {name: 'Dashboard', icon: 'insert_chart_outlined', routerLink: '/dashboard'},
    {name: 'Tenants', icon: 'group', routerLink: '/users'},
    {name: 'Properties', icon: 'domain', routerLink: '/properties'},
    {name: 'Maintenance', icon: 'control_camera', routerLink: '/maintenance'},
    {name: 'Payments', icon: 'payments', routerLink: '/payments'},
    {name: 'Application', icon: 'app_registration', routerLink: '/applications'}];

  constructor(private router: Router, private route: ActivatedRoute, private credentials: CredentialsService) {}

  ngOnInit(): void {}

  routeToAuth(path: string): void {
    this.router.navigateByUrl(`auth/${path}`);
  }
}
