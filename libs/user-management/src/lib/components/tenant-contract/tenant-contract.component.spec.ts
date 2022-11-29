import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantContractComponent } from './tenant-contract.component';

describe('TenantContractComponent', () => {
  let component: TenantContractComponent;
  let fixture: ComponentFixture<TenantContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantContractComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TenantContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
