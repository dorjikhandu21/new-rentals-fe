import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'new-rentals-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @Input() navBar?:{ name: string, link: string}[];
  @Input() navs?: { name: string, icon: string, routerLink: string}[];
  constructor() {}

  ngOnInit(): void {
  }

}
