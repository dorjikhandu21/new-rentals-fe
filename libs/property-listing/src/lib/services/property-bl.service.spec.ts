import { TestBed } from '@angular/core/testing';

import { PropertyBlService } from './property-bl.service';

describe('PropertyBlService', () => {
  let service: PropertyBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
