import { TestBed } from '@angular/core/testing';

import { UstadhService } from './ustadh.service';

describe('UstadhService', () => {
  let service: UstadhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UstadhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
