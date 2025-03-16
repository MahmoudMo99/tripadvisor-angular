import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookingPaymentGuard } from './booking-payment.guard';

describe('bookingPaymentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookingPaymentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
