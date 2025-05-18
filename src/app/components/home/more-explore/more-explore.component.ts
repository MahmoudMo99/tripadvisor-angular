import { Component, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-explore',
  imports: [CommonModule,RouterModule],
  templateUrl: './more-explore.component.html',
  styleUrl: './more-explore.component.scss'
})
export class MoreExploreComponent {
  trends: any[] = [];
    @Input() travelCreators: any[] = [];


  constructor(private homeService: HomeService,private router: Router) {}

  // ngOnInit(): void {
  //   this.trendsService.getTravelCreators().subscribe((data) => {
  //     this.trends = data.slice(0, 3).map(trend => ({
  //       title: trend.title,
  //       image: trend.images[0],
  //       link: `/explore/${trend.id}`
  //     }));
  //   }, error => {
  //     console.error('Error fetching travel experiences:', error);
  //   });
  // }
  ngOnInit(): void {
    this.fetchAttractions();
  }

  fetchAttractions(): void {
    this.homeService.getAttractions().subscribe({

      next: (data) => {
         console.log('Fetched attractions data:', data);
        this.travelCreators = data.slice(4, 7).map(attraction => ({
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


      onCardClick(attraction: any) {
      console.log('Clicked card:', attraction);

    if (!attraction.id) {
    console.error('Missing ID in attraction:', attraction);
    return;
  }

  this.router.navigate(['/attraction', attraction.id]);
  }
}
