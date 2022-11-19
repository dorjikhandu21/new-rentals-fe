import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {CredentialsService} from "@new-rentals/shared";
import {SwUpdate} from "@angular/service-worker";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {AuthService} from "@new-rentals/auth";

@UntilDestroy()
@Component({
  selector: 'new-rentals-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'new-rentals';

  constructor(private credentials: CredentialsService, private router: Router, private swUpdate: SwUpdate, private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.authService.setCredentials();
    window.location.pathname === '/' && this.credentials.isAuthenticated() && this.router.navigate(['/home']);
    this.loadLatestVersion();
  }

  loadLatestVersion(): void {
    if (this.swUpdate.isEnabled) {
      this.reloadPage();
      this.routeChange();
    }
  }

  reloadPage(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.pipe(untilDestroyed(this)).subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }

  routeChange(): void {
    this.router.events.pipe(untilDestroyed(this)).subscribe(event => {
      (event instanceof NavigationStart) && this.swUpdate.checkForUpdate();
    });
  }
}
