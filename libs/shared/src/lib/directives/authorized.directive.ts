import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {CredentialsService, RolesEnum} from "@new-rentals/shared";

@Directive({
  selector: '[newRentalsAuthorized]'
})
export class AuthorizedDirective implements OnInit{
  @Input() newRentalsAuthorized?: RolesEnum[];

  constructor(private el: ElementRef, private credentialsService: CredentialsService) { }

  ngOnInit(): void {
    // @ts-ignore
    if (!this.newRentalsAuthorized?.includes(this.credentialsService.currentUser()['role_id'])) {
      const elt: HTMLElement = this.el.nativeElement;
      elt?.parentNode?.removeChild(elt);
    }
  }
}
