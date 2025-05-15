export interface IBookedDate {
    checkInDate?: Date;
    checkOutDate?: Date;
  }
  
  export interface IRoom {
    _id?: string;
    maxAdults: number;
    maxChildren: number;
    bookedDates: IBookedDate[];
    roomNumber: string;
    floorNumber: number;
    type: "Single" | "Double" | "Suite" | "Family" | "Deluxe";
    description: string;
    roomSize?: string;
    bedType?: string;
  }
  

  