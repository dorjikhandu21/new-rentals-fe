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
  constructor(private router: Router, private route: ActivatedRoute, private credentials: CredentialsService) {}

  ngOnInit(): void {}

  routeToAuth(path: string): void {
    this.router.navigateByUrl(`auth/${path}`);
  }
}
