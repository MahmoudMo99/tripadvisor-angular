import { Routes } from '@angular/router';
// import { NavBarHomePageComponent } from './components/home/nav-bar-home-page/nav-bar-home-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { FlightpageComponent } from './components/flights/flightpage/flightpage.component';
import { SearchedFlightsComponent } from './components/flights/searched-flights/searched-flights.component';
import { GetflightdetailsComponent } from './components/flights/getflightdetails/getflightdetails.component';
export const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Flights', component: FlightpageComponent },
  { path: 'searched-flight', component: SearchedFlightsComponent },
  { path: 'getflightdetails/:id', component: GetflightdetailsComponent },


];
