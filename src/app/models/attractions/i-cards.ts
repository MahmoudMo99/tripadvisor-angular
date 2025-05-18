import { IDestination } from "../Destination/idestination";

export interface ICards {
  _id: string;
  title: string;
  images: string[];
  location?: string;
  rating: number;
  reviewsCount: number;
  price?: number;
  rank?: number;
  category?: string;
  isRecommended?: boolean;
  isGlobalDestination?: boolean;
  isGlobalAttraction?: boolean;

  description?: string;
  highlights?: string[];

  itinerary?: {
    startPoint: string;
    returnPoint: string;
    stops: {
      name: string;
      duration: string;
      admission: string;
    }[];
  };

 
    minAge: number;
    maxAge: number;
    groupSize: number;
    duration: string;
    language: string[];
    mobileTicket: boolean;
  

  pricingOptions?: {
    pricePerAdult: number;
    totalPrice: number;
    timeSlots: string[];
  };

  extras?: {
    freeCancellation: boolean;
    reserveNowPayLater: boolean;
    lowestPriceGuarantee: boolean;
    award?: {
      name: string;
      year: number;
    };
  };

  productCategories?: string[];
  destination?: IDestination; 
  accessibility?: string[];
  code?: string;
  timeOfDay?: 'morning' | 'afternoon' | 'evening';
  languages?: ('english' | 'arabic' | 'french' | 'german' | 'spanish')[];
}
