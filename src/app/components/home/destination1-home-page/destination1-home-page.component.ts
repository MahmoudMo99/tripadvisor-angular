import { Component } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination1-home-page',
  imports: [CommonModule],
  templateUrl: './destination1-home-page.component.html',
  styleUrl: './destination1-home-page.component.scss'
})
export class Destination1HomePageComponent {
  destinations: any[] = [];

  constructor(private destinationService: HomeService, private router: Router) {}
  ngOnInit(): void {

    this.destinationService.getDestination().subscribe((data) => {
          console.log("trip" ,data);

      this.destinations = data
    });
  }



  scrollToLeft() {
    const container = document.getElementById('scroll-container-4');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('scroll-container-4');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  }


onCardClick(Trips: any) {
  const tripId = Trips.id || Trips._id;
  console.log('Clicked card:', Trips);

  if (!tripId) {
    console.error('Missing ID in Trips:', Trips);
    return;
  }

  this.router.navigate(['/trips', tripId]);
}

}
