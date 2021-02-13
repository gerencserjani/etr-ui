import { TestBed } from '@angular/core/testing';

import { TakesService } from './takes.service';

describe('TakesService', () => {
  let service: TakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
