export interface Ibooking {
  leadTraveler: Traveler;
  traveler2: Traveler;
  email: string;
  phoneNumber: string;
  type: 'Hotel' | 'Restaurant' | 'Flight' | 'Trip' | 'Attractions';
  reference: string;
  Location: string;
  paymentDetails: PaymentDetails;
  checkIn: Date;
  checkOut: Date;
  roomId: string;
}

export interface Traveler {
  firstName: string;
  lastName: string;
}

export interface PaymentDetails {
  method: 'Credit/Debit Card' | 'PayPal' | 'Google Pay';
}



