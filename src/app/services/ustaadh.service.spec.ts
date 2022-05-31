import { TestBed } from '@angular/core/testing';

import { UstaadhService } from './ustaadh.service';

describe('UstaadhService', () => {
  let service: UstaadhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UstaadhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
