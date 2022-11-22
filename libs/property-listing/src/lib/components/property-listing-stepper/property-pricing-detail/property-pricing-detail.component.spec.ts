import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPricingDetailComponent } from './property-pricing-detail.component';

describe('PropertyPricingDetailComponent', () => {
  let component: PropertyPricingDetailComponent;
  let fixture: ComponentFixture<PropertyPricingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyPricingDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyPricingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
