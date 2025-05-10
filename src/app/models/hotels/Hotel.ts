import { IDestination } from "../Destination/idestination";

export interface Hotel {
  _id?: string;
  name: string;
  address: string;
  description: string;
  longDescription?: string;
  award?: string;
  languagesSpoken: string[];
  images: string[];
  pricePerNight: number;
  emailHotel?: string;
  contactHotel?: string;
  HotelLink?: string;
  location: {
    type: 'Point';
    coordinates: number[];
  };
  hotelStyle: string[];
  cancellationDeadline?: Date;
  // rooms: Room[];
  amenities: string[];
  groupedAmenities?: {
    propertyAmenities: string[];
    roomFeatures: string[];
    roomTypes: string[];
  };
  destinationId: string | IDestination; 
  totalReviews?: number;
  averageRating?: number;
  ranking?: {
    position: number;
    totalHotels: number;
  };
  scoreDetails?: {
    Location?: number;
    Rooms?: number;
    Value?: number;
    Cleanliness?: number;
    Service?: number;
    "Sleep Quality"?: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
