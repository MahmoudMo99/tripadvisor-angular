import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-travel-creator',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './travel-creator.component.html',
  styleUrls: ['./travel-creator.component.scss'],
})
export class TravelCreatorComponent implements OnInit {
  hotels: any[] = [];

  constructor(private homeService: HomeService,private router: Router) {}

  // ngOnInit() {
  //   this.fetchCreators();
  // }

  // fetchCreators() {
  //   this.homeService.getTravelCreators().subscribe(
  //     (data) => {
  //       this.TravelCreator = data.map((creator: any) => ({
  //         title: creator.title,
  //         image: creator.images?.[0] || 'assets/default-image.jpg',
  //         link: `/creator/${creator.id}`,
  //         rate: creator.rating || 0,
  //         reviews: creator.reviewsCount || 0,
  //         price: `$${creator.price?.toFixed(2) || 'N/A'}`,
  //       }));
  //     },
  //     (error) => {
  //       console.error('Error fetching travel creators:', error);
  //     }
  //   );
  // }
 ngOnInit() {
    this.fetchHotels();
  }

  fetchHotels() {
    this.homeService.getHotels().subscribe(
      (data) => {
        this.hotels = data.map((hotel: any) => ({
          title: hotel.name,
          image: hotel.images?.[0] || 'assets/default-image.jpg',
          link: `/hotel/${hotel._id}`,
          rate: hotel.averageRating || 0,
          reviews: hotel.totalReviews || 0,
          price: `$${hotel.pricePerNight?.toFixed(2) || 'N/A'}`,
        }));
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
  }
createArray(rate: number): number[] {
  return new Array(Math.round(rate)).fill(0);
}

getRate(rate: number): number {
  return rate;
}

  scrollToLeft() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  }







       onCardClick(attraction: any) {
      console.log('Clicked card:', attraction);

    if (!attraction.id) {
    console.error('Missing ID in attraction:', attraction);
    return;
  }

  this.router.navigate(['/hotels', attraction.id]);
  }
}
