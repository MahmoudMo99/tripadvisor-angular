import { Component } from '@angular/core';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgbOffcanvasModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CreateTripComponent } from "../create-trip/create-trip.component";

@Component({
  selector: 'app-empty-trips',
  imports: [CarouselModule, ButtonModule, TagModule, NgbOffcanvasModule, CreateTripComponent],
  templateUrl: './empty-trips.component.html',
  styleUrl: './empty-trips.component.scss',
})
export class EmptyTripsComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}
  cities = [
    { name: 'London', image: 'assets/trips-images/london.jpg' },
    { name: 'Boston', image: 'assets/trips-images/boston.jpg' },
    { name: 'Paris', image: 'assets/trips-images/paris.jpg' },
    { name: 'Chicago', image: 'assets/trips-images/chicago.jpg' },
    { name: 'Dubai', image: 'assets/trips-images/dubai.jpg' },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
  ];

  openManualTripBuilder(content: any) {
    this.offcanvasService.open(content, {
      position: 'end',
      backdrop: true,
    });
  }
}
