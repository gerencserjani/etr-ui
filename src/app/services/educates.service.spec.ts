import { TestBed } from '@angular/core/testing';

import { EducatesService } from './educates.service';

describe('EducatesService', () => {
  let service: EducatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
