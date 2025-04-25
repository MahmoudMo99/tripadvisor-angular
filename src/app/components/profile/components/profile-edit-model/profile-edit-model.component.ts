import { Component, Input } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { IEditUser } from '../../../../models/user/i-edit-user';
import { NgClass } from '@angular/common';
import { IUser } from '../../../../models/user/i-user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-model',
  imports: [NgClass,FormsModule],
  templateUrl: './profile-edit-model.component.html',
  styleUrl: './profile-edit-model.component.scss'
})
export class ProfileEditModelComponent {
  editUserData: IEditUser = {}
  showEditModelFlag: boolean = false;
  @Input() userData: IUser = {
    name: '',
    username: '',
  };

  constructor(private userService: UserService) {
    this.userService.showEditModelFlag.subscribe((res: boolean) => {
      this.showEditModelFlag = res;
    }
    )
    this.userService.currentUser.subscribe((res: IUser) => {
      this.userData = { ...this.userData, ...res };
      
    }
    )

  }


  saveUserData() {
    this.userService.editProfile(this.editUserData).subscribe((res: IUser) => {
       this.userService.currentUser.next({ ...this.userData, ...res });
      console.log(this.userData);
      this.closeEditModel();
    }
    );
  }

  closeEditModel() {
    this.userService.showEditModelFlag.next(false);
  }

  showEditImageModel(type: string) {
    
    this.userService.showEditImageModelFlag.next(true);
    
    this.userService.showEditImageModelType.next(type);
   

}


}