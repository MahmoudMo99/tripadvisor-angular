import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ItripFetch } from '../../../../models/Trips/itrip-fetch';

@Component({
  selector: 'app-trip-collaboration-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './trip-collaboration-dialog.component.html',
  styleUrls: ['./trip-collaboration-dialog.component.css']
})
export class TripCollaborationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TripCollaborationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public tripData: ItripFetch
  ) {}

  copyLink() {
    const link = `https://www.tripadvisor.com/Trips?t=${this.tripData._id}`;
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  }
}
