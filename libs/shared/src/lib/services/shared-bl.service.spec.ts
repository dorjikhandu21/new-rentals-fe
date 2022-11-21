import { TestBed } from '@angular/core/testing';

import { SharedBlService } from './shared-bl.service';

describe('SharedBlService', () => {
  let service: SharedBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
