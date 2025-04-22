import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-home-page',
  imports: [],
  templateUrl: './banner-home-page.component.html',
  styleUrl: './banner-home-page.component.scss'
})
export class BannerHomePageComponent {
  bannerImage: string = 'assets/caption.jpg';
  title: string = 'The 2025 Tripadvisor Trendcast';
  subtitle: string = 'Forecasting the future of travel—now.';
  buttonText: string = 'Check it out';
  buttonLink: string = '#';
}
