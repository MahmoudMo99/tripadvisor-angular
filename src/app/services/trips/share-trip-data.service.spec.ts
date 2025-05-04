/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareTripDataService } from './share-trip-data.service';

describe('Service: ShareTripData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareTripDataService]
    });
  });

  it('should ...', inject([ShareTripDataService], (service: ShareTripDataService) => {
    expect(service).toBeTruthy();
  }));
});
