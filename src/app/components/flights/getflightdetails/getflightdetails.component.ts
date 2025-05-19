// import { Component, OnInit } from '@angular/core';
// import { FlightService } from '../../../services/flight.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-getflightdetails',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './getflightdetails.component.html',
//   styleUrls: ['./getflightdetails.component.scss']
// })
// export class GetflightdetailsComponent implements OnInit {
//   flight: any;
//   bookingData: any = {
//     selectedDate: '',
//     travelers: 1,
//     selectedSeat: '',
//     totalPrice: 0,
//     flight: null,
//     flightId: ''
//   };

//   constructor(
//     private route: ActivatedRoute,
//     private flightService: FlightService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const flightId = params.get('id');
//       if (flightId) {
//         this.getflightbyid(flightId);
//       } else {
//         console.error('Flight ID is missing');
//       }
//     });
//   }

//   getflightbyid(flightId: string): void {
//     if (!flightId) {
//       console.error('Flight ID is missing');
//       return;
//     }

//     this.flightService.getFlightById(flightId).subscribe({
//       next: (flight) => {
//         if (!flight) {
//           console.error('No flight data returned');
//           return;
//         }
//         this.flight = flight;
//         console.log('Flight Details:', this.flight);

//         // Initialize bookingData with flight details
//         this.bookingData = {
//           selectedDate: new Date(flight.departureDate).toISOString().split('T')[0],
//           travelers: 1,
//           selectedSeat: flight.seats[0]?.seatNumber || '',
//           totalPrice: flight.seats[0]?.price || 0,
//           flight: this.flight,
//           flightId: flightId
//         };
//       },
//       error: (err) => {
//         console.error('Error fetching flight details:', err);
//       }
//     });
//   }

//   onTravelersChange(event: any): void {
//     this.bookingData.travelers = +event.target.value;
//     this.updateTotalPrice();
//   }

//   onDateChange(event: any): void {
//     this.bookingData.selectedDate = event.target.value;
//   }

//   selectSeat(seat: string): void {
//     this.bookingData.selectedSeat = seat;
//     const selectedSeat = this.flight.seats.find((s: any) => s.seatNumber === seat);
//     this.bookingData.totalPrice = selectedSeat ? selectedSeat.price * this.bookingData.travelers : this.bookingData.totalPrice;
//   }

//   updateTotalPrice(): void {
//     const selectedSeat = this.flight?.seats.find((s: any) => s.seatNumber === this.bookingData.selectedSeat);
//     this.bookingData.totalPrice = selectedSeat ? selectedSeat.price * this.bookingData.travelers : this.bookingData.totalPrice;
//   }

//   bookFlight(): void {
//     if (!this.flight || !this.bookingData.flightId) {
//       console.error('Flight data is missing.');
//       return;
//     }

//     console.log('Booking confirmed with:', this.bookingData);

//     this.router.navigate(['/Booking'], {
//       state: { booking: this.bookingData }
//     }).then(() => {
//       window.scrollTo(0, 0);
//       console.log('Navigated to /Booking with bookingData in state');
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getflightdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './getflightdetails.component.html',
  styleUrls: ['./getflightdetails.component.scss']
})
export class GetflightdetailsComponent implements OnInit {
  flight: any;
  returnFlight: any; // NEW: to hold return flight if present
  bookingData: any = {
    selectedDate: '',
    travelers: 1,
    selectedSeat: '',
    totalPrice: 0,
    flight: null,
    flightId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightId = params.get('id');
      // Check for returnId in query params
      this.route.queryParamMap.subscribe(qparams => {
        const returnId = qparams.get('returnId');
        if (flightId) {
          this.getflightbyid(flightId, 'outbound');
          if (returnId) {
            this.getflightbyid(returnId, 'return');
          }
        } else {
          console.error('Flight ID is missing');
        }
      });
    });
  }

  getflightbyid(flightId: string, type: 'outbound' | 'return' = 'outbound'): void {
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
        if (type === 'outbound') {
          this.flight = flight;
          // Initialize bookingData with flight details (for outbound only)
          this.bookingData = {
            selectedDate: new Date(flight.departureDate).toISOString().split('T')[0],
            travelers: 1,
            selectedSeat: flight.seats[0]?.seatNumber || '',
            totalPrice: flight.seats[0]?.price || 0,
            flight: this.flight,
            flightId: flightId
          };
        } else {
          this.returnFlight = flight;
        }
      },
      error: (err) => {
        console.error('Error fetching flight details:', err);
      }
    });
  }

  onTravelersChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.bookingData.travelers = +target.value || 1; 
      this.updateTotalPrice();
    }
  }

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.bookingData.selectedDate = target.value;
    }
  }

  selectSeat(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.bookingData.selectedSeat = target.value;
      this.updateTotalPrice();
    }
  }

  updateTotalPrice(): void {
    const selectedSeat = this.flight?.seats.find((s: any) => s.seatNumber === this.bookingData.selectedSeat);
    this.bookingData.totalPrice = selectedSeat ? selectedSeat.price * this.bookingData.travelers : this.bookingData.totalPrice;
  }

  getSelectedSeat(): any {
    return this.flight?.seats.find((s: any) => s.seatNumber === this.bookingData.selectedSeat);
  }

  bookFlight(seat: any): void {
    const booking = {
      type: 'Flight',
      reference: this.bookingData.flightId,
      checkIn: new Date(this.bookingData.selectedDate),
      checkOut: null,
      seatId: seat._id,
      flight: this.flight
    };

    console.log('booking data', booking);

    this.router.navigate(['/Booking'], {
      state: { booking }
    }).then(() => {
      window.scrollTo(0, 0);
      console.log('Navigated to /Booking with bookingData in state');
    });
  }
}