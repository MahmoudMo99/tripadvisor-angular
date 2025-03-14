import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-travel-creator',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './travel-creator.component.html',
  styleUrls: ['./travel-creator.component.scss']
})
export class TravelCreatorComponent implements OnInit {
  TravelCreator: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.fetchCreators();
  }

  fetchCreators() {
    this.homeService.getTravelCreators().subscribe(
      (data) => {
        this.TravelCreator = data.map((creator: any) => ({
          title: creator.title,
          image: creator.images?.[0] || 'assets/default-image.jpg', // Use first image or default
          link: `/creator/${creator.id}`, // Dynamic link
          rate: creator.rating || 0, // Ensure rating is present
          reviews: creator.reviewsCount || 0, // Ensure review count is present
          price: `$${creator.price?.toFixed(2) || 'N/A'}`, // Format price
        }));
      },
      (error) => {
        console.error('Error fetching travel creators:', error);
      }
    );
  }

  createArray(rate: number): number[] {
    return new Array(Math.round(rate)).fill(0);
  }

  scrollToLeft() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
