import { Component, OnInit } from '@angular/core';
import {AuthType} from "../models/auth.model";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'new-rentals-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  componentType?: AuthType;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => (this.componentType = value['TYPE']));
  }
}
