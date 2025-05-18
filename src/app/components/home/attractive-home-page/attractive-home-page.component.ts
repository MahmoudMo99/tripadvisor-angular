import { Component, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attractive-home-page',
  imports: [CommonModule],
  templateUrl: './attractive-home-page.component.html',
  styleUrl: './attractive-home-page.component.scss'
})
export class AttractiveHomePageComponent {
  @Input() title: string = 'Things To Do ';
  @Input() subtitle: string = 'Our Activietes For You  ';
  @Input() travelCreators: any[] = [];
  @Input() containerId: string = 'scroll-container-attractive';
  constructor(private homeService: HomeService,private router: Router) {}





   ngOnInit(): void {
    this.fetchAttractions();
  }

  fetchAttractions(): void {
    this.homeService.getAttractions().subscribe({
      next: (data) => {
         console.log('Fetched attractions data:', data);
        this.travelCreators = data.map(attraction => ({
           id:attraction._id ||attraction._id,
          title: attraction.title,
          image: attraction.images?.[0] || 'assets/default.jpg',
          creator: attraction.location || 'Unknown',
          items: attraction.reviewsCount || 0,
        }));
      },
      error: (error) => {
        console.error('Error fetching attractions:', error);
      }
    });
  }
  scrollToLeft(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error("Scroll container not found!");
      return;
    }
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error("Scroll container not found!");
      return;
    }
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }


      onCardClick(attraction: any) {
      console.log('Clicked card:', attraction);

    if (!attraction.id) {
    console.error('Missing ID in attraction:', attraction);
    return;
  }

  this.router.navigate(['/attraction', attraction.id]);
  }
}
