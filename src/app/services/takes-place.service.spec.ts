import { TestBed } from '@angular/core/testing';

import { TakesPlaceService } from './takes-place.service';

describe('TakesPlaceService', () => {
  let service: TakesPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakesPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
