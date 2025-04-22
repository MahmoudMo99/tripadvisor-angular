import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ActivityServiceService } from '../../services/bookingServices/activity-service.service';

export const bookingPaymentGuard: CanActivateFn = (route, state) => {
  const activityService = inject(ActivityServiceService);
  const router = inject(Router);

  if (activityService.hasRequiredActivityData()) {
    return true;
  } else {
    router.navigate(['/Booking/activity-details']);
    return false;
  }
};
