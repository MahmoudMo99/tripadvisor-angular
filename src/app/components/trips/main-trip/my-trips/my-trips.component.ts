import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../../../services/trips/trips.service';
import { ItripFetch } from '../../../../models/Trips/itrip-fetch';
import { EmptyTripsComponent } from '../empty-trips/empty-trips.component';
import {
  NgbModal,
  NgbOffcanvas,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AddDateModelComponent } from '../add-date-model/add-date-model.component';
import { CreateTripComponent } from "../create-trip/create-trip.component";
import { MatDialog } from '@angular/material/dialog';
import { TripInviteModalComponent } from '../trip-invite-modal/trip-invite-modal.component';
import { TripShareModalComponent } from '../trip-share-modal/trip-share-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrl: './my-trips.component.scss',
  standalone: true,
  imports: [EmptyTripsComponent, NgbPopoverModule, CreateTripComponent],
})
export class MyTripsComponent implements OnInit {
  completedTrips: ItripFetch[] = [];
  uncompletedTrips: ItripFetch[] = [];
  isLoading = false;
  error: string | null = null;
  selectedTripId: string  = "";

  constructor(
    private tripsService: TripsService,
    private modalService: NgbModal,
    private offcanvasService: NgbOffcanvas,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchMyTrips();
  }

  openManualTripBuilder(content: any) {
    this.offcanvasService.open(content, {
      position: 'end',
      backdrop: true,
    });
  }

  fetchMyTrips(): void {
    this.isLoading = true;
    this.tripsService.getMyTrips().subscribe({
      next: (res) => {
        this.completedTrips = res.completedTrips || [];
        console.log(res);
        
        this.uncompletedTrips = res.uncompletedTrips || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching trips:', err);
        this.error = 'Failed to load your trips.';
        this.isLoading = false;
      },
    });
  }

  togglePopover(popover: any, tripId: string) {
    this.selectedTripId = tripId;
    popover.isOpen() ? popover.close() : popover.open();
  }

  openDateModal() {
    const modalRef = this.modalService.open(AddDateModelComponent, {
      centered: true,
    });
    modalRef.componentInstance.tripId = this.selectedTripId;
    modalRef.result.then(
      (result) => {
        console.log('Selected date:', result);
      },
      () => {}
    );
  }

  invite() {
    this.tripsService.inviteTrip(this.selectedTripId).subscribe({
      next: (res) => {
        this.dialog.open(TripInviteModalComponent, {
          data: {
            inviteLink: res.shareableLink,
            tripName: res.tripName,
            contributors: res.contributors,
          },
        });
      },
      error: (err) => {
        console.error('Invite failed:', err);
      },
    });
  }

  shareTrip() {
  this.tripsService.shareTrip(this.selectedTripId).subscribe({
    next: (res) => {
      this.dialog.open(TripShareModalComponent, {
        data: {
          shareableLink: res.shareableLink,
          tripname: res.tripname,
        },
      });
    },
    error: (err) => {
      console.error('Share failed:', err);
    },
  });
}
  makePublic() {}
  markAsComplete() {}
  deleteTrip() { }
  


  goToDetails(id:string) {
        this.router.navigate(['/trips', id]);
console.log(this.selectedTripId);

  }
}
