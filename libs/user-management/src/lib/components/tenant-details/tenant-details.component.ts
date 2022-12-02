import { Component, OnInit } from '@angular/core';
import {User} from "@new-rentals/shared";
import {UserFacadeService} from "../../services/user-facade.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'new-rentals-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss'],
})
export class TenantDetailsComponent implements OnInit {
  user?:User;
  constructor(private userFacadeService: UserFacadeService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setUserDetails();
  }

  setUserDetails(): void {
    this.userFacadeService.getUser(this.activatedRoute.snapshot.params['id']).subscribe((user) => {
      this.user = user
    });
  }
}
