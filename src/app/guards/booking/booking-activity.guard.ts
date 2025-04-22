import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BookingService } from '../../services/bookingServices/booking.service';

export const bookingActivityGuard: CanActivateFn = (route, state) => {
  const bookingService = inject(BookingService);
  const router = inject(Router);

  if (bookingService.hasRequiredData()) {
    return true;
  } else {
    router.navigate(['/Booking/contact-details']);
    return false;
  }
};
