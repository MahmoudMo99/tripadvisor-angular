import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule
  ]
})
export class HotelBookingComponent {
  @Input() hotelId: string = '';

  checkIn: Date | null = null;
  checkOut: Date | null = null;

  adults: number = 1;
  children: number = 0;
  roomsCount: number = 1;

  rooms: any[] = [];
  errorMessage: string = '';
  loading: boolean = false;
  showGuests: boolean = false;

  constructor(private hotelsService: HotelsService, private route: ActivatedRoute ,private router: Router) {}

  ngOnInit(): void {
    if (!this.hotelId) {
      this.hotelId = this.route.snapshot.paramMap.get('id') || '';
    }
  }

  updateAvailability(): void {
    this.checkAvailability();
  }

checkAvailability(): void {
  if (!this.checkIn || !this.checkOut) return;

  if (this.checkIn >= this.checkOut) {
    this.errorMessage = 'Check-in date must be before check-out date.';
    return;
  }

  const checkInStr = this.formatDate(this.checkIn);
  const checkOutStr = this.formatDate(this.checkOut);

  this.loading = true;
  this.errorMessage = '';
  this.rooms = [];

  this.hotelsService
    .checkAvailability(this.hotelId, checkInStr, checkOutStr, this.adults, this.children, this.roomsCount)
    .subscribe({
      next: (response) => {
        this.rooms = response.rooms;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Server error';
        this.loading = false;
      }
    });
}


  increase(type: string): void {
    if (type === 'rooms') this.roomsCount++;
    if (type === 'adults') this.adults++;
    if (type === 'children') this.children++;
  }

  decrease(type: string): void {
    if (type === 'rooms' && this.roomsCount > 1) this.roomsCount--;
    if (type === 'adults' && this.adults > 1) this.adults--;
    if (type === 'children' && this.children > 0) this.children--;
  }

  get isAvailable(): boolean {
    return this.rooms.length > 0 && !this.errorMessage;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; 
  }


  @HostListener('document:click', ['$event'])
handleClickOutside(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (!target.closest('.guests')) {
    this.showGuests = false;
  }
}
  goToHotels() {
      this.router.navigate(['/hotels'])
}
}
