import { TestBed } from '@angular/core/testing';

import { UnitFacadeService } from './unit-facade.service';

describe('UnitFacadeService', () => {
  let service: UnitFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
