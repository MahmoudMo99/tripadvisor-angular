import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../../services/flight.service';

@Component({
  selector: 'app-checkavailbiltyandbook',
  templateUrl: './checkavailbiltyandbook.component.html',
  styleUrls: ['./checkavailbiltyandbook.component.scss']
})
export class CheckavailbiltyandbookComponent implements OnInit {
  flightId: string | null = null;
  query: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.flightId = params.get('id');
      if (!this.flightId) {
        console.error('Flight ID is missing');
      }
    });

    this.route.queryParams.subscribe(params => {
      this.query = {
        date: params['date'],
        seats: params['seats']
      };
    });
  }

  checkAvailability() {
    if (!this.flightId) {
      console.error('Flight ID is missing');
      return;
    }

    if (!this.query.date || !this.query.seats) {
      console.error('Missing required query parameters.');
      return;
    }

    this.flightService.checkAvailability(this.flightId, this.query).subscribe({
      next: (response) => {
        if (response.available) {
          this.router.navigate(['/booking-form', this.flightId]); // انتقل لصفحة الحجز
        } else {
          alert('No available seats for this flight.');
        }
      },
      error: (err) => {
        console.error('Error checking availability:', err);
        alert('Error checking availability. Please try again.');
      }
    });
  }
}
