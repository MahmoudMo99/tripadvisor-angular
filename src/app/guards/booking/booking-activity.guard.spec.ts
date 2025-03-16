import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookingActivityGuard } from './booking-activity.guard';

describe('bookingActivityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookingActivityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
