import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounce, debounceTime, distinctUntilChanged, filter, tap} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'new-rentals-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss'],
})
export class SearchHomeComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  constructor() {}

  ngOnInit(): void {
    this.listenToSearchControl();
  }

  listenToSearchControl(): void {
    this.searchControl.valueChanges.pipe(untilDestroyed(this),
      distinctUntilChanged(),
      debounceTime(400),
      filter((value: string) => value.length > 2),
      tap((value)=> {

    }))
  }

  addressChange(event: any): void {
    debugger
  }
}
