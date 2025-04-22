export interface ICards {
  id: string;
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

  details?: {
    ageRange: string;
    maxGroupSize: number;
    duration: string;
    languages: string[];
    mobileTicket: boolean;
  };

  pricingOptions?: {
    pricePerAdult: number;
    totalPrice: number;
    timeSlots: string[];
  };

  extras?: {
    freeCancellation: boolean;
    reserveNowPayLater: boolean;
    lowestPriceGuarantee: boolean;
    award: {
      name: string;
      year: number;
    };
  };
}
