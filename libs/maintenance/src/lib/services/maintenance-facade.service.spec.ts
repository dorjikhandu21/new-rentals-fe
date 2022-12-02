import { TestBed } from '@angular/core/testing';

import { MaintenanceFacadeService } from './maintenance-facade.service';

describe('MaintenanceFacadeService', () => {
  let service: MaintenanceFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
