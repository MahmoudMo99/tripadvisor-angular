
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getflightdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getflightdetails.component.html',
  styleUrls: ['./getflightdetails.component.scss']
})
export class GetflightdetailsComponent implements OnInit {
  flight: any;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightId = params.get('id');
      if (flightId) {
        this.getflightbyid(flightId);
      } else {
        console.error('Flight ID is missing');
      }
    });
  }

  getflightbyid(flightId: string) {
    if (!flightId) {
      console.error('Flight ID is missing');
      return;
    }
  
    this.flightService.getFlightById(flightId).subscribe({
      next: (flight) => {
        if (!flight) {
          console.error('No flight data returned');
          return;
        }
        this.flight = flight;
        console.log('Flight Details:', this.flight);
      },
      error: (err) => {
        console.error('Error fetching flight details:', err);
      }
    });
  }

  checkAvailability(flightId: string) {
    if (!flightId || !this.flight) {
      console.error('Flight data is missing.');
      return;
    }
  
    const query = {
      date: this.flight.date, 
      seats: this.flight.availableSeats 
    };
  
    this.router.navigate(['/checkavailabilityandbook', flightId], { queryParams: query });
  }
  
  
}