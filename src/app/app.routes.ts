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
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';

import { SearchedFlightsComponent } from './components/flights/searched-flights/searched-flights.component';
import { GetflightdetailsComponent } from './components/flights/getflightdetails/getflightdetails.component';
import { FlightReviewComponent } from './components/flights/flight-review/flight-review.component';
import { FlightpageComponent } from './components/flights/flightpage/flightpage.component';
import { RestaurantDetailsConnectionComponent } from './components/restaurants/restaurant-details/restaurant-details-connection/restaurant-details-connection.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { OptionsComponent } from './components/authentication/options/options.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomePageComponent },

      // authentication routes (Mahmoud)
      { path: 'options', component: OptionsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },

      { path: 'attractions', component: AttractionsComponent },
      // { path: 'attractions/details', component: AttractionsDetailsComponent },
      { path: 'attraction/:id', component: AttractionsDetailsComponent },
      { path: 'steps', component: StepsComponent },
      { path: 'attraction/:id/contact', component: ContactComponent },

      { path: 'attraction/activity', component: ActivityComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'searched-flight', component: SearchedFlightsComponent },
      { path: 'getflightdetails/:id', component: GetflightdetailsComponent },
      { path: 'flights', component: FlightpageComponent },
      { path: '', redirectTo: '/Home', pathMatch: 'full' },

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
      { path: 'restaurants', component: ResturantPageComponent },
      {
        path: 'restaurants/:id',
        component: RestaurantDetailsConnectionComponent,
      },
    ],
  },
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  // { path: 'Home', component: HomePageComponent },
  // { path: 'attractions', component: AttractionsComponent },
  // // { path: 'attractions/details', component: AttractionsDetailsComponent },
  // { path: 'attraction/:id', component: AttractionsDetailsComponent },
  // { path: 'steps', component: StepsComponent },
  // { path: 'attraction/:id/contact', component: ContactComponent },

  // { path: 'attraction/activity', component: ActivityComponent },
  // { path: 'payment', component: PaymentComponent },
  // { path: '', redirectTo: '/Home', pathMatch: 'full' },

  // { path: '', redirectTo: '/Home', pathMatch: 'full' },
  // {
  //   path: 'Booking',
  //   component: BookingComponent,
  //   children: [
  //     { path: '', redirectTo: 'contact-details', pathMatch: 'full' },
  //     {
  //       path: 'contact-details',
  //       component: ContactDetailsComponent,
  //     },
  //     {
  //       path: 'activity-details',
  //       component: ActivityDetailsComponent,
  //       canActivate: [bookingActivityGuard],
  //     },
  //     {
  //       path: 'payment-details',
  //       component: PaymentDetailsComponent,
  //       canActivate: [bookingPaymentGuard],
  //     },
  //   ],
  // },
  // { path: 'Resturant', component: ResturantPageComponent },
];
