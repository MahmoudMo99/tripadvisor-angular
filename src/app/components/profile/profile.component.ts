import { Component } from '@angular/core';
import { FeedComponent } from './components/feed/feed.component';
import { CommonModule, NgClass } from '@angular/common';
import { TripComponent } from "./components/trip/trip.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user/i-user';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FeedComponent, NgClass, TripComponent, PhotosComponent, ReviewsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // user
  userData: IUser = {
    firstName: '',
    lastName: '',
    username: ''
  };



  screenSize: string = window.innerWidth > 992 ? 'lg' : 'sm';
  // nav
  navItems = [
    { name: 'Activity feed', Component: FeedComponent },
    { name: 'Trip', Component: TripComponent },
    { name: 'Photo', Component: PhotosComponent },
    { name: 'Reviews', Component: ReviewsComponent },
    { name: 'Booking', Component: ReviewsComponent },
    { name: 'Travel map', Component: FeedComponent }
  ];
  currentMainIndex = 0;
  showEditModelFlag: boolean = false;

  constructor(private userService: UserService) {
    this.getUserData();
  }


  // user
  getUserData() {
    this.userService.getCurrentUser().subscribe((res: IUser) => {
      this.userData = res;
      console.log(this.userData);
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
    this.showEditModelFlag = true;
  }
  closeEditModel() {
    this.showEditModelFlag = false;
  }

}
