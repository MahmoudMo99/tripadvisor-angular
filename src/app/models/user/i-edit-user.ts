export interface IEditUser {
    name?: string;
    username?: string;
    image?: string;
    cover?: string;
    currentCity?: { _id: string, name: string, region: string, country: string, description: string };
    currentCityId?: string;
    website?: string;
    bio?: string;
}