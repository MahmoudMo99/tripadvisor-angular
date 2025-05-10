import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCalendar } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  NativeDateAdapter,
  MAT_DATE_FORMATS,
  DateAdapter,
} from '@angular/material/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TripsService } from '../../../../services/trips/trips.service';

// Default Material date formats
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'l',
  },
  display: {
    dateInput: 'MMM d, y',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'app-add-date-model',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  templateUrl: './add-date-model.component.html',
  styleUrl: './add-date-model.component.scss',
})
export class AddDateModelComponent {
  selectedDate: Date | null = null;
  @Input() tripId!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private tripsService: TripsService
  ) {}

  onDateChange(event: Date) {
    this.selectedDate = event;
    console.log('Selected date:', event);
  }

  clearDate() {
    this.selectedDate = null;
  }

applyDate() {
  if (this.selectedDate && this.tripId) {
    const selected = this.selectedDate;

    const utcDate = new Date(
      Date.UTC(
        selected.getFullYear(),
        selected.getMonth(),
        selected.getDate()
      )
    );

    console.log('Sending UTC Date:', utcDate.toISOString()); // 🔍 Debug

    this.tripsService
      .updateTripDate(this.tripId, utcDate.toISOString())
      .subscribe({
        next: () => {
          console.log('✅ Date applied');
          this.activeModal.close('saved'); // ✅ Must be here!
        },
        error: (err) => {
          console.error('❌ Failed to update date:', err);
        },
      });
  }
}


}
