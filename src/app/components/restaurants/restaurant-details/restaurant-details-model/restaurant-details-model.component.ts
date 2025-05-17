

  import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../../../../models/restaurants/restaurant';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestaurantService } from '../../../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-details-model',
  imports: [CommonModule],
  templateUrl: './restaurant-details-model.component.html',
  styleUrl: './restaurant-details-model.component.scss'
})
export class RestaurantDetailsModelComponent {
  @Input() restaurant!: Restaurant;
  @Input() showModal: boolean = false;
  @Output() close = new EventEmitter<void>();

  @Input() restaurantId!: string;
  selectedCategory: 'all' | 'menu' | 'interior' = 'all';
  imagesToShow: string[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) {}

  // ngOnInit() {
  //   this.restaurantService.getRestaurantById(this.restaurantId).subscribe(res => {
  //     this.restaurant = res;

  //     this.selectedCategory = 'all';
  //     this.updateImages();
  //   });
  // }


ngOnInit() {
  if (!this.restaurantId) {
    console.error('restaurantId is undefined');
    return;
  }

  this.restaurantService.getRestaurantById(this.restaurantId).subscribe({
    next: (res) => {
      this.restaurant = res;
      this.selectedCategory = 'all';
      this.updateImages();
    },
    error: (err) => {
      console.error('Error loading restaurant:', err);
    }
  });
}


  setCategory(category: 'all' | 'menu' | 'interior', img?: string) {
    this.selectedCategory = category;
    this.updateImages(img);

  }

  updateImages(selectedImage?: string) {
    if (!this.restaurant?.images) return;

    const { restaurantImages, menuImages, interiorImages } = this.restaurant.images;

    if (this.selectedCategory === 'all') {
      this.imagesToShow = [...restaurantImages, ...menuImages, ...interiorImages];
      console.log('All images:', this.imagesToShow);

    } else if (this.selectedCategory === 'menu') {
      this.imagesToShow = menuImages;
    } else if (this.selectedCategory === 'interior') {
      this.imagesToShow = interiorImages;
    }

    if (selectedImage) {
      this.imagesToShow = [selectedImage, ...this.imagesToShow];
    }
  }

 getRatingCircles(rating: number = 5): ('full' | 'half' | 'empty')[] {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  return Array.from({ length: 5 }, (_, i) => {
    if (i < fullStars) return 'full';
    if (i === fullStars && hasHalf) return 'half';
    return 'empty';
  });
}

  closeModal() {
    this.close.emit();
  }

}

