export interface Restaurant {
  _id: string;
  name: string;
  destination: string;
  rank: number;
  rating:number;
  // location: string;

location: {
  address: string;
    city?: string;
    country?: string;
    coordinates?: string;
}
  // hours: string;
 hours: {
  [day: string]: string[];
};
  website: string;
  phone: string;
  // reviewsCount: number;
  numberOfReviews: number;
  latitude?: number;
  longitude?: number;
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
