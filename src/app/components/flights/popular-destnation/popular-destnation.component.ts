// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-popular-destnation',
//   imports: [CommonModule],
//   templateUrl: './popular-destnation.component.html',
//   styleUrl: './popular-destnation.component.scss'
// })
// export class PopularDestnationComponent {
//    destinations = [
//     {
//       title: "Get the best deals",
//       description: "Compare flight prices from hundreds of airlines and travel sites in one place.",
//       image: "/assets/image.png"
//     },
//     {
//       title: "Customise your results",
//       description: "Filter for your preferred airlines, flight times, desired price, and more.",
//       image: "/assets/image.png"
//     },
//     {
//       title: "Search without worry",
//       description: "We’re completely free to use—no hidden charges or fees on flight prices at all.",
//       image: "/assets/image.png"
//     }
//   ];
//    flightDeals = [
//     {
//       title: "Best Flight Deals",
//       description: "No need to shop multiple sites any more. We've already done that by searching hundreds of cheap flights for you– scouring premium airlines, low-cost carriers and the biggest online travel agencies for the best deals. We'll even check alternate dates and nearby airports to help you save money, time, even sanity on airline tickets."
//     },
//     {
//       title: "Flight Search Filters",
//       description: "Our filters make it a snap to easily find the cheap flight that's right for you. Find direct flights that are nonstop, avoid early departure times— or try our Best Value filter, which sorts based on price, duration, and additional factors."
//     },
//     {
//       title: "In-Flight Experience",
//       description: "Want Wi-Fi? More legroom? Or even a seat that allows you to sleep perfectly flat? Tripadvisor Flights now makes it easier to find the amenities that can make or break your flight. Find which flights include Wi-Fi, live TV, power outlets, free baggage, and more."
//     },
//     {
//       title: "Airplane Photos",
//       description: "Thousands of photos from real travelers let you peek inside the plane before you buy your ticket. Our airline reviews provide unbiased opinions to help you select the right airline and flight for your trip."
//     }
//   ];
  
// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DestinationService } from '../../../services/Destinations/destination.service';
import { IDestination } from '../../../models/Destination/idestination';
import { IFlight } from '../../../models/Flights/IFlight';
import { FlightService } from '../../../services/flight.service';

@Component({
 selector: 'app-popular-destnation',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-destnation.component.html',
  styleUrl: './popular-destnation.component.scss'
})
export class PopularDestnationComponent implements OnInit {
  imageDestinations: IDestination[] = [];
  flightPrices: { [key: string]: number } = {};
  isLoading = true;

  private destinationIds = [
    '67fe4d32a7a7a3182cfabd9f',
    '67fe4e17c79c9823f3c3f169',
    '67fe4e3ec79c9823f3c3f16c',
    '67fe4e6ac79c9823f3c3f16f',
    '67fe4e8ac79c9823f3c3f172'
  ];

  constructor(
    private destinationService: DestinationService,
    private flightService: FlightService
  ) {}
destinations = [
    {
      title: "Get the best deals",
      description: "Compare flight prices from hundreds of airlines and travel sites in one place.",
      image: "/assets/image.png"
    },
    {
      title: "Customise your results",
      description: "Filter for your preferred airlines, flight times, desired price, and more.",
      image: "/assets/image.png"
    },
    {
      title: "Search without worry",
      description: "We’re completely free to use—no hidden charges or fees on flight prices at all.",
      image: "/assets/image.png"
    }
  ];
   flightDeals = [
    {
      title: "Best Flight Deals",
      description: "No need to shop multiple sites any more. We've already done that by searching hundreds of cheap flights for you– scouring premium airlines, low-cost carriers and the biggest online travel agencies for the best deals. We'll even check alternate dates and nearby airports to help you save money, time, even sanity on airline tickets."
    },
    {
      title: "Flight Search Filters",
      description: "Our filters make it a snap to easily find the cheap flight that's right for you. Find direct flights that are nonstop, avoid early departure times— or try our Best Value filter, which sorts based on price, duration, and additional factors."
    },
    {
      title: "In-Flight Experience",
      description: "Want Wi-Fi? More legroom? Or even a seat that allows you to sleep perfectly flat? Tripadvisor Flights now makes it easier to find the amenities that can make or break your flight. Find which flights include Wi-Fi, live TV, power outlets, free baggage, and more."
    },
    {
      title: "Airplane Photos",
      description: "Thousands of photos from real travelers let you peek inside the plane before you buy your ticket. Our airline reviews provide unbiased opinions to help you select the right airline and flight for your trip."
    }
  ];
  ngOnInit(): void {
    this.destinationService.getDestinationsByIds(this.destinationIds).subscribe({
      next: (destinations: IDestination[]) => {
        this.imageDestinations = destinations;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.imageDestinations = [];
        this.isLoading = false;
      }
    });
  }


  getPrice(destinationId: string): number | null {
    return this.flightPrices[destinationId] || null;
  }
}