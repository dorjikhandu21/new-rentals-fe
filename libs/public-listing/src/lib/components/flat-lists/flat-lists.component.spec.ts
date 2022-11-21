import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatListsComponent } from './flat-lists.component';

describe('FlatListsComponent', () => {
  let component: FlatListsComponent;
  let fixture: ComponentFixture<FlatListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlatListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
