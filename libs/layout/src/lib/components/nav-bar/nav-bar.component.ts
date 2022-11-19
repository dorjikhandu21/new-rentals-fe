import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-rentals-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navs: any[] = [
    {name: 'Dashboard', icon: 'insert_chart_outlined'},
    {name: 'Tenants', icon: 'group'},
    {name: 'Properties', icon: 'domain'},
    {name: 'Maintenance', icon: 'control_camera'},
    {name: 'Payments', icon: 'payments'},
    {name: 'Application', icon: 'app_registration'}];

  constructor() {}

  ngOnInit(): void {}
}
