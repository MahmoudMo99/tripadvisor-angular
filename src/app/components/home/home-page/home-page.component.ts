import { Component } from '@angular/core';
import { NavBarHomePageComponent } from '../nav-bar-home-page/nav-bar-home-page.component';
import { WhereToHomePageComponent } from '../where-to-home-page/where-to-home-page.component';
import { NavigateSearchHomePageComponent } from '../navigate-search-home-page/navigate-search-home-page.component';
import { SearchBarHomePageComponent } from '../search-bar-home-page/search-bar-home-page.component';
import { BannerHomePageComponent } from '../banner-home-page/banner-home-page.component';
import { AdvertisementHomePageComponent } from '../advertisement-home-page/advertisement-home-page.component';

@Component({
  selector: 'app-home-page',
  imports: [NavBarHomePageComponent,WhereToHomePageComponent,NavigateSearchHomePageComponent,SearchBarHomePageComponent,BannerHomePageComponent,AdvertisementHomePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
