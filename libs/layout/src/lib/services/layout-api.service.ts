import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {Unit} from "@new-rentals/shared";
import {DataProxy} from "@apollo/client";
import Query = DataProxy.Query;

@Injectable({
  providedIn: 'root'
})
export class LayoutApiService {

  constructor(private apollo: Apollo) { }

}
