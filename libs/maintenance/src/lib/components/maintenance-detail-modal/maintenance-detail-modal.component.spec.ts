import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceDetailModalComponent } from './maintenance-detail-modal.component';

describe('MaintenanceDetailModalComponent', () => {
  let component: MaintenanceDetailModalComponent;
  let fixture: ComponentFixture<MaintenanceDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceDetailModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
