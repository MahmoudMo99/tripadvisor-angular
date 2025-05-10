import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TripCollaborationDialogComponent } from '../trip-collaboration-dialog/trip-collaboration-dialog.component';
import * as L from 'leaflet';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TripsService } from '../../../../services/trips/trips.service';
import { ItripFetch } from '../../../../models/Trips/itrip-fetch';
import { TripSharedService } from '../../../../services/trips/share-trip-data.service'; // <-- NEW

@Component({
  selector: 'app-tripsDetails-main',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './tripsDetails-main.component.html',
  styleUrls: ['./tripsDetails-main.component.css'],
})
export class TripsDetailsMainComponent implements OnInit, AfterViewInit {
  tripData?: ItripFetch;
  map?: L.Map;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private tripsService: TripsService,
    private tripSharedService: TripSharedService 
  ) {}

  openInviteDialog() {
    this.dialog.open(TripCollaborationDialogComponent, {
      width: '500px',
      data: this.tripData
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tripsService.getTripById(id).subscribe({
        next: (trip) => {
          this.tripData = trip;
          this.tripSharedService.setTripData(trip); 
          console.log('Trip loaded:', trip);
        },
        error: (error) => {
          console.error('Failed to load trip', error);
        }
      });
    }
  }

  ngAfterViewInit(): void {
    const map = L.map('map').setView([48.8566, 2.3522], 13); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([48.8566, 2.3522])
      .addTo(map)
      .bindPopup('Paris')
      .openPopup();
  }
}
