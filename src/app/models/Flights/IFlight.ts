import { IDestination } from "../Destination/idestination";

export interface IFlight {
  _id: string;
  flightNumber: string;
origin: string | IDestination;
destination: string | IDestination;
  departureDate: string;
  arrivalDate: string;
  airline: string;
  flightDuration: number;
  seats: {
    seatNumber: string;
    seatType: string;
    price: number;
    currency: string;
    bookedSeats: number;
  }[];
}