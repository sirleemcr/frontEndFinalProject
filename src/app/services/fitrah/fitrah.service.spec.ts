import { TestBed } from '@angular/core/testing';

import { FitrahService } from './fitrah.service';

describe('FitrahService', () => {
  let service: FitrahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitrahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
