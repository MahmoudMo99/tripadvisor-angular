import { TestBed } from '@angular/core/testing';

import { AttractionService } from './hotels.service';

describe('AttractionService', () => {
  let service: AttractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
