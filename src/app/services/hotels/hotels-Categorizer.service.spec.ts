/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttractionCategorizerService } from './hotels-Categorizer.service';

describe('Service: AttractionCategorizer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttractionCategorizerService]
    });
  });

  it('should ...', inject([AttractionCategorizerService], (service: AttractionCategorizerService) => {
    expect(service).toBeTruthy();
  }));
});
