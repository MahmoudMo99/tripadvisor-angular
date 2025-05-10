import { IUser } from "../user/i-user";

export interface IReview {
    user: IUser;
    title: string;
    description: string;
    type: "Destination" | "Hotel" | "Restaurant" | "Atractive";
    reference: {
        
    };
    rating: number;
    when: Date;
    who: "Solo" | "Family" | "Friends" | "Couple";
    photos: {
        uri: string;
        caption: string;
    }[];
    updatedAt: Date;
    createdAt: Date;
}
