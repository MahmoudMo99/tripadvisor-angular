import { Component, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attractive-home-page',
  imports: [CommonModule],
  templateUrl: './attractive-home-page.component.html',
  styleUrl: './attractive-home-page.component.scss'
})
export class AttractiveHomePageComponent {
  // travelCreators: any[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() travelCreators: any[] = [];
  @Input() containerId: string = 'scroll-container-attractive';
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchTravelCreators();
    // this.homeService.getTravelCreators().subscribe((date) =>{
    //   this.travelCreators = date
    // })
  }

  fetchTravelCreators() {
    this.homeService.getTravelCreators().subscribe(data => {
        this.travelCreators = data.map(dest => ({
          title: dest.title,
          image: dest.images[0],
          creator: dest.location,
          items: dest.reviewsCount
        }));
      }, error => {
        console.error('Error fetching travel creators:', error);
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
