export interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    image?: string;
    cover?: string;
    currentCity?: string; // Assuming `Destination` ID is a string
    website?: string;
    bio?: string;
    followers?: {
        counter: number;
        userId: string[]; // Assuming `User` IDs are strings
    };
    following?: {
        counter: number;
        userId: string[]; // Assuming `User` IDs are strings
    };
    trips?: string[]; // Assuming `Trip` IDs are strings
    createdAt?: Date; // Added for timestamps
    updatedAt?: Date; // Added for timestamps
}