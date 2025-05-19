import { Component } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination2-home-page',
  imports: [CommonModule],
  templateUrl: './destination2-home-page.component.html',
  styleUrl: './destination2-home-page.component.scss'
})
export class Destination2HomePageComponent {
 destinations: any[] = [];

  constructor(private destinationService: HomeService, private router: Router) {}
  ngOnInit(): void {
    this.destinationService.getDestination().subscribe((data) => {
      this.destinations = data
    });
  }
  scrollToLeft() {
    const container = document.getElementById('scroll-container-5');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('scroll-container-5');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  }
    onCardClick(Trips: any) {
      console.log('Clicked card:', Trips);

    if (!Trips.id) {
    console.error('Missing ID in Trips:', Trips);
    return;
  }

  this.router.navigate(['/Trips', Trips.id]);
  }
}
