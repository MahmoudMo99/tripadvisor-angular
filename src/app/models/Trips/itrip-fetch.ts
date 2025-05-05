import { IDestination } from "../Destination/idestination";
export interface ItripFetch {
  _id: string;
  name: string;
  destination:IDestination;
  visibility: string;
  date?: string; 
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  users: any[]; 
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}
