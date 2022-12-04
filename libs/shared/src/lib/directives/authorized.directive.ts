import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {CredentialsService, RolesEnum, SharedFacadeService, SharedStoreStateEnum, User} from "@new-rentals/shared";

@Directive({
  selector: '[newRentalsAuthorized]'
})
export class AuthorizedDirective implements OnInit{
  @Input() newRentalsAuthorized?: RolesEnum[];

  constructor(private el: ElementRef, private credentialsService: CredentialsService, private sharedFacadeService: SharedFacadeService) { }

  ngOnInit(): void {
    const currentUserProfile: User = this.sharedFacadeService.getSpecificState(SharedStoreStateEnum.CURRENT_USER_PROFILE);
    // @ts-ignore

    if (!this.newRentalsAuthorized?.includes(currentUserProfile?.role?.id || this.credentialsService.currentUser()['role_id'])) {
      const elt: HTMLElement = this.el.nativeElement;
      elt?.parentNode?.removeChild(elt);
    }
  }
}
