import { TestBed } from '@angular/core/testing';

import { AccesiblityService } from './accesiblity.service';

describe('AccesiblityService', () => {
  let service: AccesiblityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesiblityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
