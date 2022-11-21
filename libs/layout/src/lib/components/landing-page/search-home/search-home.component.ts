import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounce, debounceTime, distinctUntilChanged, filter, tap} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Loader} from "@googlemaps/js-api-loader";
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
    // this.listenToSearchControl();
  }

  listenToSearchControl(): void {
    this.searchControl.valueChanges.pipe(untilDestroyed(this),
      distinctUntilChanged(),
      debounceTime(400),
      filter((value: string) => value.length > 2),
      tap((value)=> {
    }))
  }

  addressChange(event: Address): void {
    this.sharedFacadeService.updateSpecificState({}, SharedStoreStateEnum.GEO_CODING_FILTERS);
    this.router.navigate(['list'], {relativeTo: this.route});
    // The api requests for the apartments will happen here: privide lat and lng filters;
    console.log(event.geometry.location.lat());
    console.log(event.geometry.location.lng());
  }
}
