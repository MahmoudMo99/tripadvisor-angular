import { Component } from '@angular/core';
import { FeedComponent } from './components/feed/feed.component';
import { CommonModule, NgClass } from '@angular/common';
import { TripComponent } from "./components/trip/trip.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/user/i-user';
import { FormsModule } from '@angular/forms';
import { IEditUser } from '../../models/user/i-edit-user';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { IReview } from '../../models/review/review';
import { ReviewService } from '../../services/review/review.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FeedComponent, NgClass, TripComponent, PhotosComponent, ReviewsComponent, FormsModule,NgbDropdownModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // user
  userData: IUser = {
    name: '',
    username: '',
  };
  editUserData :IEditUser={} 
  reviews: IReview[] = [];
  



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
  showEditImageModelFlag: boolean = false;
  showEditImageModelType: string = 'image';

  constructor(private userService: UserService,private reviewService: ReviewService) {
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
  saveUserData() {
    this.userService.editProfile(this.editUserData).subscribe((res: IUser) => {
      this.userData = { ...this.userData, ...res };
      console.log(this.userData);
      this.closeEditModel();
    }
    );
  }
  saveUserImage() {
    const inputElement = document.getElementById('coverPhotoInput') as HTMLInputElement;
    if (inputElement?.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const formData = new FormData();
      formData.append(`${this.showEditImageModelType}`, file);

      this.userService.editProfile(formData).subscribe((res: IUser) => {
        this.userData = { ...this.userData, ...res };
        console.log(this.userData);
        this.closeEditImageModel();
      });
    } else {
      console.error('No file selected');
    }
  }
  // reviews
  getReviews() {
    this.reviewService.userReviews.subscribe(r=>{
      this.reviews = r;
      console.log(this.reviews);
    })
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
      this.editUserData = { 
        name: this.userData.name,
        username: this.userData.username,
        image: this.userData.image,
        cover: this.userData.cover,
        currentCity: this.userData.currentCity,
        website: this.userData.website,
        bio: this.userData.bio
      };
      this.showEditModelFlag = true;
    }
  closeEditModel() {
      this.showEditModelFlag = false;
    }
    showEditImageModel(type: string){
      this.showEditImageModelFlag = true;
      this.showEditImageModelType = type;
    }
    closeEditImageModel(){
      this.showEditImageModelFlag = false;
    }

}
