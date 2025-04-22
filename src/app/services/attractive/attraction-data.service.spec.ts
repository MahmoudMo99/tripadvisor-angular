/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttractionDataService } from './attraction-data.service';

describe('Service: AttractionData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttractionDataService]
    });
  });

  it('should ...', inject([AttractionDataService], (service: AttractionDataService) => {
    expect(service).toBeTruthy();
  }));
});
