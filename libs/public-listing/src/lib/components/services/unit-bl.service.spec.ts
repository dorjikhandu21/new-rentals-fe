import { TestBed } from '@angular/core/testing';

import { UnitBlService } from './unit-bl.service';

describe('UnitBlService', () => {
  let service: UnitBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
