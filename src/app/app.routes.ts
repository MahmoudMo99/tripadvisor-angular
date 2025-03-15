import { Routes } from '@angular/router';
// import { NavBarHomePageComponent } from './components/home/nav-bar-home-page/nav-bar-home-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ResturantPageComponent } from './components/restaurants/resturant-page/resturant-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Resturant', component: ResturantPageComponent },

];
