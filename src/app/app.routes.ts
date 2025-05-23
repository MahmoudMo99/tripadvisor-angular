import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AttractionsComponent } from './components/attractions/attractions/attractions-main/attractions.component';
import { AttractionsDetailsComponent } from './components/attractions/attractions-details/attractions-details-main/attractions-details.component';
import { BookingComponent } from './components/bookings/booking/booking.component';
import { ContactDetailsComponent } from './components/bookings/contact-details/contact-details.component';
import { ActivityDetailsComponent } from './components/bookings/activity-details/activity-details.component';
import { PaymentDetailsComponent } from './components/bookings/payment-details/payment-details.component';
import { bookingActivityGuard } from './guards/booking/booking-activity.guard';
import { bookingPaymentGuard } from './guards/booking/booking-payment.guard';
import { ResturantPageComponent } from './components/restaurants/resturant-page/resturant-page.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { ReviewSearchComponent } from './components/reviews/review-search/review-search.component';
import { ReviewFormComponent } from './components/reviews/review-form/review-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostPhotoComponent } from './components/post-photo/post-photo.component';
import { SearchComponent } from './components/search/search.component';
import { SearchedFlightsComponent } from './components/flights/searched-flights/searched-flights.component';
import { GetflightdetailsComponent } from './components/flights/getflightdetails/getflightdetails.component';
import { FlightpageComponent } from './components/flights/flightpage/flightpage.component';
import { MyTripsComponent } from './components/trips/main-trip/my-trips/my-trips.component';
import { RestaurantDetailsConnectionComponent } from './components/restaurants/restaurant-details/restaurant-details-connection/restaurant-details-connection.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { OptionsComponent } from './components/authentication/options/options.component';
import { TripsDetailsMainComponent } from './components/trips/tripsDetails/tripsDetails-main/tripsDetails-main.component';
import { ForYouComponent } from './components/trips/tripsDetails/for-you/for-you.component';
import { SavesComponent } from './components/trips/tripsDetails/saves/saves.component';
import { ItineraryComponent } from './components/trips/tripsDetails/itinerary/itinerary.component';
import { HotelsComponent } from './components/hotels/hotels/hotels-main/hotels.component';
import { HotelsDetailsComponent } from './components/hotels/hotels-details/hotels-details-main/hotels-details.component';
// import { ModalLanguageComponent } from './shared/modal-language/modal-language.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomePageComponent },
      { path: 'options', component: OptionsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'attractions', component: AttractionsComponent },
      { path: 'attraction/:id', component: AttractionsDetailsComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'hotel/:id', component: HotelsDetailsComponent },

      {
        path: 'trips/:id',
        component: TripsDetailsMainComponent,
        children: [
          { path: '', redirectTo: 'for-you', pathMatch: 'full' },
          { path: 'saves', component: SavesComponent },
          { path: 'itinerary', component: ItineraryComponent },
          { path: 'for-you', component: ForYouComponent },
        ],
      },

      {
        path: 'trips/:id',
        component: TripsDetailsMainComponent,
        children: [
          { path: '', redirectTo: 'for-you', pathMatch: 'full' },
          { path: 'saves', component: SavesComponent },
          { path: 'itinerary', component: ItineraryComponent },
          { path: 'for-you', component: ForYouComponent },
        ],
      },
      { path: 'searched-flight', component: SearchedFlightsComponent },
      { path: 'getflightdetails/:id', component: GetflightdetailsComponent },
      { path: 'flights', component: FlightpageComponent },
      { path: 'restaurants', component: ResturantPageComponent },
      {
        path: 'restaurants/:id',
        component: RestaurantDetailsConnectionComponent,
      },
      { path: 'Trips', component: MyTripsComponent, title: 'Trips' },
      {
        path: 'trips/:id',
        component: TripsDetailsMainComponent,
        children: [
          { path: '', redirectTo: 'for-you', pathMatch: 'full' },
          { path: 'saves', component: SavesComponent },
          { path: 'itinerary', component: ItineraryComponent },
          { path: 'for-you', component: ForYouComponent },
        ],
      },

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
      { path: 'review-search', component: ReviewSearchComponent },
      { path: 'review-form/:type/:reference', component: ReviewFormComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'post-photo', component: PostPhotoComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
];
