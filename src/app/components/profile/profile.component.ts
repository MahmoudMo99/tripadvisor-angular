import { Component } from '@angular/core';
import { FeedComponent } from './components/feed/feed.component';
import { CommonModule, NgClass } from '@angular/common';
import { TripComponent } from './components/trip/trip.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user/i-user';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { IReview } from '../../models/review/review';
import { ReviewService } from '../../services/review/review.service';
import { ProfileEditModelComponent } from './components/profile-edit-model/profile-edit-model.component';
import { ProfileImageEditModelComponent } from './components/profile-image-edit-model/profile-image-edit-model.component';

@Component({
  selector: 'app-profile',



  // imports: [CommonModule, NgClass, FormsModule, NgbDropdownModule, RouterLink, ProfileEditModelComponent, ProfileImageEditModelComponent],
  imports: [
    CommonModule,
    NgClass,
    FormsModule,
    NgbDropdownModule,
    RouterLink,
    ProfileEditModelComponent,
    ProfileImageEditModelComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // user
  userData: IUser = {
    name: '',
    username: '',
  };
  reviews: IReview[] = [];

  screenSize: string = window.innerWidth > 992 ? 'lg' : 'sm';
  // nav
  navItems = [
    { name: 'Activity feed', Component: FeedComponent },
    { name: 'Trip', Component: TripComponent },
    { name: 'Photo', Component: PhotosComponent },
    { name: 'Reviews', Component: ReviewsComponent },
    { name: 'Booking', Component: ReviewsComponent },
    { name: 'Travel map', Component: FeedComponent },
  ];
  currentMainIndex = 0;

  showEditModelFlag: boolean = false;
  showEditImageModelFlag: boolean = false;
  showEditImageModelType: string = 'image';

  constructor(
    private userService: UserService,
    private reviewService: ReviewService
  ) {
    this.userService.currentUser.subscribe((res: IUser) => {
      this.userData = { ...this.userData, ...res };
    });
    this.getUserData();
    this.getReviews();
  }

  // user
  getUserData() {
    this.userService.getCurrentUser().subscribe((res: IUser) => {
      this.userData = { ...this.userData, ...res };
      console.log(this.userData);
    });
  }

  // reviews
  getReviews() {
    this.reviewService.userReviews.subscribe((r) => {
      this.reviews = r;
      console.log(this.reviews);
    });
  }

  // nav
  changeMain(index: any) {
    this.currentMainIndex = index;
  }
  // responsive
  onResize(event: any) {
    this.screenSize = event.target.innerWidth > 992 ? 'lg' : 'sm';
  }
  showEditModel() {
    this.userService.showEditModelFlag.next(true);
  }

  showEditImageModel(type: string) {
    this.showEditImageModelFlag = true;
    this.showEditImageModelType = type;
  }
  closeEditImageModel() {
    this.showEditImageModelFlag = false;
  }
  openCoverPhotoInput() {
    const inputElement = document.getElementById(
      'coverPhotoInput'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }
}
