import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../../../services/trips/trips.service';
import { ItripFetch } from '../../../../models/Trips/itrip-fetch';
import { EmptyTripsComponent } from '../empty-trips/empty-trips.component';
import {
  NgbModal,
  NgbOffcanvas,
  NgbPopoverModule
} from '@ng-bootstrap/ng-bootstrap';
import { AddDateModelComponent } from '../add-date-model/add-date-model.component';
import { CreateTripComponent } from "../create-trip/create-trip.component";
import { MatDialog } from '@angular/material/dialog';
import { TripInviteModalComponent } from '../trip-invite-modal/trip-invite-modal.component';
import { TripShareModalComponent } from '../trip-share-modal/trip-share-modal.component';
import { Router } from '@angular/router';
import { MakeTripPublicModalComponent } from '../make-trip-public-modal/make-trip-public-modal.component';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrl: './my-trips.component.scss',
  standalone: true,
  imports: [EmptyTripsComponent, NgbPopoverModule, CreateTripComponent,CommonModule],
})
export class MyTripsComponent implements OnInit {
  completedTrips: ItripFetch[] = [];
  uncompletedTrips: ItripFetch[] = [];
  isLoading = false;
  error: string | null = null;
  selectedTripId: string  = "";
selectedSort: string = 'Trip start date';

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
      this.completedTrips = [...(res.completedTrips || [])]; 
      this.uncompletedTrips = [...(res.uncompletedTrips || [])]; 
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



  openDateModal(tripId: string) {
  const modalRef = this.modalService.open(AddDateModelComponent, {
    centered: true,
  });

  modalRef.componentInstance.tripId = tripId;

  modalRef.result.then(
    (result) => {
      if (result === 'saved') {
        this.fetchMyTrips(); 
      }
    },
    () => {
    }
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
makePublic(trip: any) {
  const modalRef = this.modalService.open(MakeTripPublicModalComponent, {
    centered: true,
    size: 'lg',
  });

  modalRef.componentInstance.trip = trip;

  modalRef.result.then(
    (result) => {
      console.log('Modal closed with:', result); 
      if (result === 'delete') {
        this.deleteTrip(trip._id);
      } else if (result === 'updated') {
        console.log('Refreshing trips...'); 
        this.fetchMyTrips();
      }
    },
    (dismissReason) => {
      console.log('Modal dismissed with:', dismissReason);
    }
  );
}
markAsComplete() {
 this.tripsService.markTripAsComplete(this.selectedTripId).subscribe({
  next: (res) => {
    const updatedTrip = res.trip;

    this.uncompletedTrips = this.uncompletedTrips.filter(
      (trip) => trip._id !== updatedTrip._id
    );

    this.completedTrips.unshift(updatedTrip);
  },
  error: (err) => {
    console.error('Error marking trip as completed:', err);

  },
});

}

  
deleteTrip(tripId?: string) {
  const idToDelete = tripId || this.selectedTripId;
  this.tripsService.deleteTrip(idToDelete).subscribe({
    next: () => {
      this.uncompletedTrips = this.uncompletedTrips.filter(
        (trip) => trip._id !== idToDelete
      );
      this.completedTrips = this.completedTrips.filter(
        (trip) => trip._id !== idToDelete
      );
      console.log('Trip deleted successfully');
    },
    error: (err) => {
      console.error('Error deleting trip:', err);
    },
  });
}




  goToDetails(id:string) {
        this.router.navigate(['/trips', id]);
console.log(this.selectedTripId);

  }


sortTripsFromServer(type: 'startDate' | 'recentlyEdited' | 'recentlyCreated') {
  this.isLoading = true;
  this.selectedSort = 
    type === 'startDate' ? 'Trip start date' :
    type === 'recentlyEdited' ? 'Recently edited' :
    'Recently created';

  this.tripsService.getSortedTrips(type).subscribe({
    next: (trips) => {
      this.uncompletedTrips = trips || [];
      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error fetching sorted trips:', err);
      this.error = 'Failed to sort trips.';
      this.isLoading = false;
    }
  });
}

  
}
