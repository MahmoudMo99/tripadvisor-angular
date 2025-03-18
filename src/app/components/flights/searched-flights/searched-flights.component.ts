import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../../services/flight.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searched-flights',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searched-flights.component.html',
  styleUrls: ['./searched-flights.component.scss']
})
export class SearchedFlightsComponent implements OnInit {
  searchResults: any[] = [];
  filteredResults: any[] = [];
  errorMessage: string = '';
  private subscription: Subscription | undefined;

  availableAirlines: string[] = ['Nesma', 'Other airline'];

  filters = {
    stops: { nonStop: false, oneStop: false, twoPlusStops: false },
    airlines: {} as { [key: string]: boolean },
    price: 5000,
    duration: 24
  };

  isStopsOpen = false;
  isAirlinesOpen = false;
  isPriceOpen = false;
  isDurationOpen = false;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.availableAirlines.forEach(airline => {
      this.filters.airlines[airline] = false;
    });

    this.subscription = this.route.queryParams.subscribe(params => {
      if (params) {
        this.fetchFlights(params);
      }
    });
  }


  fetchFlights(query: any) {
    this.flightService.searchFlights(query).subscribe({
      next: (results: any[]) => {
        this.searchResults = results.filter(
          (flight: any, index: number, self: any[]) =>
            index === self.findIndex((f: any) => f.id === flight.id) 
        );
        this.filteredResults = [...this.searchResults];
      },
      error: (err) => {
        console.error('Error fetching flights:', err);
        this.errorMessage = 'Error fetching flights. Please try again.';
      }
    });
  }

  getLowestSeatPrice(seats: any[]): number {
    if (!seats || seats.length === 0) return 0;
    return Math.min(...seats.map(seat => seat.price));
  }

  getflightbyid(flightId: string) {
    if (!flightId) {
      console.error('Flight ID is missing');
      return;
    }
    this.router.navigate(['/getflightdetails', flightId]);
  }

  applyFilters() {
    this.filteredResults = this.searchResults.filter(flight => {
      const stops = flight.stops || 0;
      const stopsFilter =
        (this.filters.stops.nonStop && stops === 0) ||
        (this.filters.stops.oneStop && stops === 1) ||
        (this.filters.stops.twoPlusStops && stops >= 2) ||
        (!this.filters.stops.nonStop && !this.filters.stops.oneStop && !this.filters.stops.twoPlusStops);

      const airlineFilter =
        Object.values(this.filters.airlines).some(value => value) ?
        this.filters.airlines[flight.airline] :
        true; 

      const priceFilter = this.getLowestSeatPrice(flight.seats) <= this.filters.price;

      const durationFilter = (flight.flightDuration || 0) <= this.filters.duration;

      return stopsFilter && airlineFilter && priceFilter && durationFilter;
    });
  }

  toggleAccordion(section: string) {
    switch (section) {
      case 'stops':
        this.isStopsOpen = !this.isStopsOpen;
        break;
      case 'airlines':
        this.isAirlinesOpen = !this.isAirlinesOpen;
        break;
      case 'price':
        this.isPriceOpen = !this.isPriceOpen;
        break;
      case 'duration':
        this.isDurationOpen = !this.isDurationOpen;
        break;
    }
  }
}






