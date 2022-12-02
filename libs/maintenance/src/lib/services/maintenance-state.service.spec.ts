import { TestBed } from '@angular/core/testing';

import { MaintenanceStateService } from './maintenance-state.service';

describe('MaintenanceStateService', () => {
  let service: MaintenanceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
