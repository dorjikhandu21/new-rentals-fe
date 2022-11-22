import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UntilDestroy} from "@ngneat/until-destroy";
import {Address} from "ngx-google-places-autocomplete/objects/address";
import {SharedFacadeService, SharedStoreStateEnum} from "@new-rentals/shared";
import {ActivatedRoute, Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'new-rentals-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss'],
})
export class SearchHomeComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  constructor(private sharedFacadeService: SharedFacadeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  addressChange(event: Address): void {
    debugger
    this.sharedFacadeService.updateSpecificState({}, SharedStoreStateEnum.GEO_CODING_FILTERS);
    this.router.navigate(['list'], {relativeTo: this.route});
    console.log(event.geometry.location.lat());
    console.log(event.geometry.location.lng());
  }
}
