import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantBasicDetailComponent } from './tenant-basic-detail.component';

describe('TenantBasicDetailComponent', () => {
  let component: TenantBasicDetailComponent;
  let fixture: ComponentFixture<TenantBasicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantBasicDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TenantBasicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
