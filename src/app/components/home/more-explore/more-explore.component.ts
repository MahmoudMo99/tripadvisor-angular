import { Component } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-explore',
  imports: [CommonModule,RouterModule],
  templateUrl: './more-explore.component.html',
  styleUrl: './more-explore.component.scss'
})
export class MoreExploreComponent {
  trends: any[] = [];

  constructor(private trendsService: HomeService) {}

  ngOnInit(): void {
    this.trendsService.getTravelCreators().subscribe((data) => {
      this.trends = data.slice(0, 3).map(trend => ({
        title: trend.title,
        image: trend.images[0],
        link: `/explore/${trend.id}`
      }));
    }, error => {
      console.error('Error fetching travel experiences:', error);
    });
  }
}
