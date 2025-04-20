import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-trip-share-modal',
  imports: [MatIconModule],
  templateUrl: './trip-share-modal.component.html',
  styleUrl: './trip-share-modal.component.scss',
})
export class TripShareModalComponent {
  constructor(
    public dialogRef: MatDialogRef<TripShareModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      shareableLink: string;
      tripname: string;
    }
  ) {}

  copyLink() {
    navigator.clipboard.writeText(this.data.shareableLink);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
