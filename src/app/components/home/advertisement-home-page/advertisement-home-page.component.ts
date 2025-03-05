import { Component } from '@angular/core';

@Component({
  selector: 'app-advertisement-home-page',
  imports: [],
  templateUrl: './advertisement-home-page.component.html',
  styleUrl: './advertisement-home-page.component.scss'
})
export class AdvertisementHomePageComponent {
  imageUrl = './assets/download.jpg';
  sponsor = 'Sponsored by Guadeloupe Islands';
  title = 'Discover Guadeloupe';
  description = 'Find out why travelers like you are raving about Guadeloupe.';
  buttonText = 'Explore now';
  link = '#';
}
