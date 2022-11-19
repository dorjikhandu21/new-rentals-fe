import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTenantModalComponent } from './invite-tenant-modal.component';

describe('InviteTenantModalComponent', () => {
  let component: InviteTenantModalComponent;
  let fixture: ComponentFixture<InviteTenantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InviteTenantModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InviteTenantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
