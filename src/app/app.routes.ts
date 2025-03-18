import { Routes, CanActivateFn } from '@angular/router';
// import { NavBarHomePageComponent } from './components/home/nav-bar-home-page/nav-bar-home-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AttractionsComponent } from './components/attractions/attractions/attractions-main/attractions.component';
import { AttractionsDetailsComponent } from './components/attractions/attractions-details/attractions-details-main/attractions-details.component';
import { ContactComponent } from './components/attractions/Attractive Form/contact/contact.component';
import { ActivityComponent } from './components/attractions/Attractive Form/activity/activity.component';
import { PaymentComponent } from './components/attractions/Attractive Form/payment/payment.component';
import { StepsComponent } from './components/attractions/Attractive Form/steps/steps.component';
import { BookingComponent } from './components/bookings/booking/booking.component';
import { ContactDetailsComponent } from './components/bookings/contact-details/contact-details.component';
import { ActivityDetailsComponent } from './components/bookings/activity-details/activity-details.component';
import { PaymentDetailsComponent } from './components/bookings/payment-details/payment-details.component';
import { bookingActivityGuard } from './guards/booking/booking-activity.guard';
import { bookingPaymentGuard } from './guards/booking/booking-payment.guard';
import { ResturantPageComponent } from './components/restaurants/resturant-page/resturant-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
    { path: 'attractions', component: AttractionsComponent },
    // { path: 'attractions/details', component: AttractionsDetailsComponent },
  { path: 'attraction/:id', component: AttractionsDetailsComponent }, 
  { path: 'steps', component: StepsComponent },
    { path: 'attraction/:id/contact', component: ContactComponent },

  { path: 'attraction/activity', component: ActivityComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
  

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'Booking',
    component: BookingComponent,
    children: [
      { path: '', redirectTo: 'contact-details', pathMatch: 'full' },
      {
        path: 'contact-details',
        component: ContactDetailsComponent,
      },
      {
        path: 'activity-details',
        component: ActivityDetailsComponent,
        canActivate: [bookingActivityGuard],
      },
      {
        path: 'payment-details',
        component: PaymentDetailsComponent,
        canActivate: [bookingPaymentGuard],
      },
    ],
  },
  { path: 'Resturant', component: ResturantPageComponent },
];
