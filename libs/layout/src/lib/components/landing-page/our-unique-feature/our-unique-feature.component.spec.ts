import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurUniqueFeatureComponent } from './our-unique-feature.component';

describe('OurUniqueFeatureComponent', () => {
  let component: OurUniqueFeatureComponent;
  let fixture: ComponentFixture<OurUniqueFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurUniqueFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurUniqueFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
