import { Routes } from '@angular/router';
// import { NavBarHomePageComponent } from './components/home/nav-bar-home-page/nav-bar-home-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';

export const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];
