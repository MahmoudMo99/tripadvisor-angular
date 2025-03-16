import { Component, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trends-home-page',
  imports: [CommonModule],
  templateUrl: './trends-home-page.component.html',
  styleUrl: './trends-home-page.component.scss'
})
export class TrendsHomePageComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() trends: any[] = [];
  @Input() containerId: string = 'scroll-container';


  constructor(private trendcastService: HomeService) {}

  ngOnInit() {
    this.fetchTrendingDestinations();
  }

  fetchTrendingDestinations() {
    this.trendcastService.getDestination()
      .subscribe(data => {
        this.trends = data.map(dest => ({
          title: dest.name,
          country:dest.country,
          image: dest.images[1],
        }));
      }, error => {
        console.error('Error fetching trending destinations:', error);
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
}
