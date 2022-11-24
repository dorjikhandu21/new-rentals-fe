import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSectionsComponent } from './faq-sections.component';

describe('FaqSectionsComponent', () => {
  let component: FaqSectionsComponent;
  let fixture: ComponentFixture<FaqSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqSectionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
