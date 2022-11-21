import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMaintenanceModalComponent } from './request-maintenance-modal.component';

describe('RequestMaintenanceModalComponent', () => {
  let component: RequestMaintenanceModalComponent;
  let fixture: ComponentFixture<RequestMaintenanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestMaintenanceModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestMaintenanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
