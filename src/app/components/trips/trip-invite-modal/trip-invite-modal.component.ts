import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contributor } from '../../../models/Trips/itrip-invite-res';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-trip-invite-modal',
  imports: [MatIconModule],
  templateUrl: './trip-invite-modal.component.html',
  styleUrl: './trip-invite-modal.component.scss',
})
export class TripInviteModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TripInviteModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      inviteLink: string;
      tripName: string;
      contributors: Contributor[];
    }
  ) {}

  copyLink() {
    navigator.clipboard.writeText(this.data.inviteLink);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
