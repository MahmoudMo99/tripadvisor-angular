// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { RestaurantService } from '../../../../services/restaurant.service';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { RestaurantDetailsModelComponent } from '../restaurant-details-model/restaurant-details-model.component';
// import { Restaurant } from '../../../../models/restaurants/restaurant';

// @Component({
//   selector: 'app-restaurant-details-images',
//   imports: [CommonModule,RestaurantDetailsModelComponent,RouterLink],
//   templateUrl: './restaurant-details-images.component.html',
//   styleUrls: ['./restaurant-details-images.component.scss']
// })
// export class RestaurantDetailsImagesComponent {
//   restaurants: Restaurant[] = [];
//   selectedRestaurant!: Restaurant;
//   showModal: boolean = false;

//   openModal(restaurant: Restaurant) {
//     this.selectedRestaurant = restaurant;
//     this.showModal = true;
//   }

//   closeModal() {
//     this.showModal = false;
//   }
//   restaurant: any;

//   constructor(
//     private route: ActivatedRoute,
//     private restaurantService: RestaurantService
//   ) {}
//   @ViewChild('restaurantSlider') restaurantSlider!: ElementRef;
//   @ViewChild('menuSlider') menuSlider!: ElementRef;
//   @ViewChild('interiorSlider') interiorSlider!: ElementRef;
//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.restaurantService.getRestaurantById(id).subscribe({
//         next: (data) => {
//           console.log('Restaurant data:', data);
//           this.restaurant = data;
//         },
//         error: (err) => console.error('Error fetching restaurant:', err)
//       });
//     }
//   }
//   // scrollImage(direction: 'left' | 'right', section: 'restaurant' | 'menu' | 'interior') {
//   //   let slider: ElementRef | undefined;

//   //   // Get the correct slider based on the section
//   //   if (section === 'restaurant') {
//   //     slider = this.restaurantSlider;
//   //   } else if (section === 'menu') {
//   //     slider = this.menuSlider;
//   //   } else if (section === 'interior') {
//   //     slider = this.interiorSlider;
//   //   }

//   //   // Scroll left or right
//   //   if (slider) {
//   //     const scrollAmount = 150; // Amount to scroll (can be adjusted)
//   //     const currentTransform = parseInt(slider.nativeElement.style.transform.replace('translateX(', '').replace('px)', '') || '0', 10);
//   //     const newTransform = direction === 'left' ? currentTransform + scrollAmount : currentTransform - scrollAmount;
//   //     slider.nativeElement.style.transform = `translateX(${newTransform}px)`;
//   //   }
//   // }
//   scrollToLeft(containerId: string) {
//     const container = document.getElementById(containerId);
//     if (container) container.scrollBy({ left: -300 });
//   }

//   scrollToRight(containerId: string) {
//     const container = document.getElementById(containerId);
//     if (container) container.scrollBy({ left: 300 });
//   }

// }


import { Component, ElementRef, ViewChild } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsModelComponent } from '../restaurant-details-model/restaurant-details-model.component';
import { Restaurant } from '../../../../models/restaurants/restaurant';

@Component({
  selector: 'app-restaurant-details-images',
  standalone: true,
  imports: [CommonModule, RestaurantDetailsModelComponent],
  templateUrl: './restaurant-details-images.component.html',
  styleUrls: ['./restaurant-details-images.component.scss']
})
export class RestaurantDetailsImagesComponent {
  restaurant!: Restaurant;
  restaurants: Restaurant[] = [];
  selectedRestaurant!: Restaurant;
  showModal: boolean = false;

  @ViewChild('restaurantSlider') restaurantSlider!: ElementRef;
  @ViewChild('menuSlider') menuSlider!: ElementRef;
  @ViewChild('interiorSlider') interiorSlider!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restaurantService.getRestaurantById(id).subscribe({
        next: (data: Restaurant) => {
          console.log('Restaurant data:', data);
          this.restaurant = data;
        },
        error: (err) => console.error('Error fetching restaurant:', err)
      });
    }
  }

  openModal(restaurant: Restaurant) {
    this.selectedRestaurant = restaurant;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  scrollToLeft(containerId: string) {
    const container = document.getElementById(containerId);
    if (container) container.scrollBy({ left: -300 });
  }

  scrollToRight(containerId: string) {
    const container = document.getElementById(containerId);
    if (container) container.scrollBy({ left: 300 });
  }
}
