import { Routes } from '@angular/router';
// import { NavBarHomePageComponent } from './components/home/nav-bar-home-page/nav-bar-home-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AttractionsComponent } from './components/attractions/attractions/attractions-main/attractions.component';
import { AttractionsDetailsComponent } from './components/attractions/attractions-details/attractions-details-main/attractions-details.component';
import { ContactComponent } from './components/attractions/Attractive Form/contact/contact.component';
import { ActivityComponent } from './components/attractions/Attractive Form/activity/activity.component';
import { PaymentComponent } from './components/attractions/Attractive Form/payment/payment.component';
import { StepsComponent } from './components/attractions/Attractive Form/steps/steps.component';

export const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
    { path: 'attractions', component: AttractionsComponent },
    // { path: 'attractions/details', component: AttractionsDetailsComponent },
  { path: 'attraction/:id', component: AttractionsDetailsComponent }, 
  { path: 'steps', component: StepsComponent },
    { path: 'attraction/:id/contact', component: ContactComponent },

  { path: 'attraction/activity', component: ActivityComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
  
];
