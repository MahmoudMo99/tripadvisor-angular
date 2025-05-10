import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ICards } from '../../../../models/attractions/i-cards';
import { Restaurant } from '../../../../models/restaurants/restaurant';
import { AttractionCategorizerService } from '../../../../services/attractive/Attraction-Categorizer.service';
import { RestaurantService } from '../../../../services/restaurant.service';
import { TripSharedService } from '../../../../services/trips/share-trip-data.service'; 
import { ItripFetch } from '../../../../models/Trips/itrip-fetch'; 

@Component({
  selector: 'app-for-you',
  standalone: true,
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css'],
  imports: [CommonModule, MatIconModule],
})
export class ForYouComponent implements OnInit {
  stars: number[] = Array(5).fill(0);

  attractions: ICards[] = [];
  restaurants: Restaurant[] = [];
  recommendations: (ICards | Restaurant)[] = [];

  tripData?: ItripFetch | null; 

  constructor(
    private attractionCategorizerService: AttractionCategorizerService,
    private restaurantService: RestaurantService,
    private tripSharedService: TripSharedService
  ) { }

  ngOnInit(): void {
    this.tripSharedService.tripData$.subscribe(data => {
      this.tripData = data;
      console.log('Received trip data in ForYouComponent:', data);
      this.loadAllData(); 
    });
  }

  loadAllData(): void {
    this.loadCategorizedAttractions();
    this.loadRestaurants();
  }

  private loadCategorizedAttractions(): void {
    this.attractionCategorizerService.getCategorizedAttractions().subscribe(
      (result) => {
        if (this.tripData?.destination?.name) {
          this.attractions = result.attractions
            .filter(attr =>
              attr.location?.toLocaleLowerCase().includes(this.tripData!.destination!.name.toLocaleLowerCase()))
        } else {
          this.attractions = result.attractions.slice(0, 20);
        }
        
        this.updateRecommendations();
      },
      (error) => {
        console.error('Error fetching categorized attractions:', error);
      }
    );
  }

  private loadRestaurants(): void {
    this.restaurantService.getRecentlyRestaurant().subscribe(
      (result) => {
        if (this.tripData?.destination?.name) {
          this.restaurants = result.filter(res =>
              res.destination?.toLocaleLowerCase().includes(this.tripData!.destination!.name.toLocaleLowerCase()))
        } else {
          this.restaurants = result;
        }
        
        this.updateRecommendations();
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  updateRecommendations(): void {
    this.recommendations = [...this.attractions, ...this.restaurants];
  }

  filterBy(category: string): void {
    switch (category) {
      case 'thingsToDo':
        this.recommendations = [...this.attractions];
        break;
      case 'placesToStay':
      case 'foodAndDrink':
        this.recommendations = [...this.restaurants];
        break;
      case 'tours':
        this.recommendations = [...this.attractions];
        break;
      default:
        this.updateRecommendations();
    }
  }

  refreshRecommendations(): void {
    this.loadAllData();
  }

  isAttraction(item: ICards | Restaurant): item is ICards {
    return (item as ICards).title !== undefined;
  }
}
