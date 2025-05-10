export interface Restaurant {
  _id: string;
  name: string;
  destination: string;
  rank: number;
  location: string;
  hours: string;
  website: string;
  phone: string;
  reviewsCount: number;
  numberOfReviews: number;
  images: {
    restaurantImages: string[];
    menuImages: string[];
    interiorImages: string[];
  };
  features?: {
    cuisines: string[];
    mealTypes: string[];
    specialDiets: string[];
  };
  menu: {
    _id: string;
    name: string;
    price: number;
    description: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
