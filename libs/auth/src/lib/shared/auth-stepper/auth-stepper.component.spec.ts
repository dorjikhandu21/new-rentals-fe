import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthStepperComponent } from './auth-stepper.component';

describe('AuthStepperComponent', () => {
  let component: AuthStepperComponent;
  let fixture: ComponentFixture<AuthStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
