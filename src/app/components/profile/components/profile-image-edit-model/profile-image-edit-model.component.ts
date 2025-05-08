import { Component } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { NgClass } from '@angular/common';
import { IUser } from '../../../../models/user/i-user';

@Component({
  selector: 'app-profile-image-edit-model',
  imports: [NgClass],
  templateUrl: './profile-image-edit-model.component.html',
  styleUrl: './profile-image-edit-model.component.scss',

})
export class ProfileImageEditModelComponent {
  showEditImageModelFlag: boolean = false;
  showEditImageModelType: string = 'image';

  userData: IUser = {
    name: '',
    username: '',
  };
  selectedImage: File | null = null;

  constructor(private userService: UserService) {
    this.userService.showEditImageModelFlag.subscribe((res: boolean) => {
      this.showEditImageModelFlag = res;
      console.log(this.showEditImageModelFlag);
    }
    )
    this.userService.showEditImageModelType.subscribe((res: string) => {
      this.showEditImageModelType = res;
    }
    )
    this.userService.currentUser.subscribe((res: IUser) => {
      this.userData = { ...this.userData, ...res };
      
    }
    )
  }

  closeEditImageModel() {
    this.userService.showEditImageModelFlag.next(false);
    this.selectedImage= null;
  }
showImage(){
  const inputElement = document.getElementById('coverPhotoInput') as HTMLInputElement;
  if (inputElement?.files && inputElement.files.length > 0) {
    this.selectedImage = inputElement.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const previewImage = document.getElementById('imagePreview') as HTMLImageElement;
      if (previewImage && e.target?.result) {
      previewImage.src = e.target.result as string;
      }
    };
    reader.readAsDataURL(this.selectedImage);
  }
}
  saveUserImage() {
    const inputElement = document.getElementById('coverPhotoInput') as HTMLInputElement;
    if (this.selectedImage) {
      
      const formData = new FormData();
      formData.append(`${this.showEditImageModelType}`, this.selectedImage);

      this.userService.editProfile(formData).subscribe((res: IUser) => {
        this.userService.currentUser.next({ ...this.userData, ...res }) ;
        console.log(this.userData);
        this.closeEditImageModel();
      });
    } else {
      console.error('No file selected');
    }
  }
}
