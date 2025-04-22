

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

  ngOnInit() {
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(res => {
      this.restaurant = res;

      this.selectedCategory = 'all';
      this.updateImages();
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

  createRatingCircles(rank: number = 4.5): boolean[] {
    const rounded = Math.round(rank);
    return Array(5).fill(false).map((_, i) => i < rounded);
  }

  closeModal() {
    this.close.emit();
  }

}

