import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTenantModalComponent } from './apply-tenant-modal.component';

describe('ApplyTenantModalComponent', () => {
  let component: ApplyTenantModalComponent;
  let fixture: ComponentFixture<ApplyTenantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyTenantModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyTenantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
