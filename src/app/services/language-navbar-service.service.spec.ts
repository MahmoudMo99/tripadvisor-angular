import { TestBed } from '@angular/core/testing';

import { LanguageNavbarServiceService } from './language-navbar-service.service';

describe('LanguageNavbarServiceService', () => {
  let service: LanguageNavbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageNavbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
