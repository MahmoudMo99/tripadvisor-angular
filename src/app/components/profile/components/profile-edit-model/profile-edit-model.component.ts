import { Component, Input } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { IEditUser } from '../../../../models/user/i-edit-user';
import { NgClass } from '@angular/common';
import { IUser } from '../../../../models/user/i-user';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../../../../services/location.service';

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
  cityList: any[] = [];
  selectedCity: any = null;

  constructor(private userService: UserService,private loctionService: LocationService) {
    this.userService.showEditModelFlag.subscribe((res: boolean) => {
      this.showEditModelFlag = res;
    }
    )
    this.userService.currentUser.subscribe((res: IUser) => {
      this.userData = { ...this.userData, ...res };
    }
    )
  }

  searchCity(event: any) {
    this.cityList=[];
    this.loctionService.searchCity(event.target.value,2,1).subscribe((res: any) => {
      this.cityList= res;
      console.log(this.cityList);
    }
    )
  }
  selectCity(city: any) {
    this.editUserData.currentCity = city;
    this.selectedCity=`${city.name}, ${city.country}`;
    this.cityList = [];
  }
  saveUserData() {
    
    this.userService.editProfile({...this.editUserData ,currentCityId:this.editUserData.currentCity?.['_id']}).subscribe((res: IUser) => {

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