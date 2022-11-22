import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingStepperComponent } from './property-listing-stepper.component';

describe('PropertyListingStepperComponent', () => {
  let component: PropertyListingStepperComponent;
  let fixture: ComponentFixture<PropertyListingStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyListingStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyListingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
