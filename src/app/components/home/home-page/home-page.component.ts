import { Component } from '@angular/core';
import { NavBarHomePageComponent } from '../nav-bar-home-page/nav-bar-home-page.component';
import { WhereToHomePageComponent } from '../where-to-home-page/where-to-home-page.component';
import { NavigateSearchHomePageComponent } from '../navigate-search-home-page/navigate-search-home-page.component';
import { SearchBarHomePageComponent } from '../search-bar-home-page/search-bar-home-page.component';
import { BannerHomePageComponent } from '../banner-home-page/banner-home-page.component';
import { AdvertisementHomePageComponent } from '../advertisement-home-page/advertisement-home-page.component';
import { TrendsHomePageComponent } from '../trends-home-page/trends-home-page.component';
import { AttractiveHomePageComponent } from '../attractive-home-page/attractive-home-page.component';
import { MoreExploreComponent } from '../more-explore/more-explore.component';
import { Destination1HomePageComponent } from '../destination1-home-page/destination1-home-page.component';
import { Destination2HomePageComponent } from '../destination2-home-page/destination2-home-page.component';
import { TravelChoiceComponent } from '../travel-choice/travel-choice.component';
import { TravelCreatorComponent } from '../travel-creator/travel-creator.component';

@Component({
  selector: 'app-home-page',
  imports: [WhereToHomePageComponent,NavigateSearchHomePageComponent,SearchBarHomePageComponent,BannerHomePageComponent,AdvertisementHomePageComponent,TrendsHomePageComponent,AttractiveHomePageComponent,MoreExploreComponent,Destination1HomePageComponent,Destination2HomePageComponent,TravelChoiceComponent,TravelCreatorComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
