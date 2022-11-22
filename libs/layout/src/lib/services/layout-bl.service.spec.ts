import { TestBed } from '@angular/core/testing';

import { LayoutBlService } from './layout-bl.service';

describe('LayoutBlService', () => {
  let service: LayoutBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
