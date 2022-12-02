import { TestBed } from '@angular/core/testing';

import { MaintenanceBlService } from './maintenance-bl.service';

describe('MaintenanceBlService', () => {
  let service: MaintenanceBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
