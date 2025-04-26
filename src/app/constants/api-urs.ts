import { environment } from '../environment/environemt.dev';

const Domain = environment.baseUrl;

export const API = {
  auth: {
    login: `${Domain}auth/login`,
  },
  attractives: {
    getAll: `${Domain}attractives`,
    getById: (id: string) => `${Domain}attractives/${id}`,
  },
  user: {
    getCurrentUser: `${Domain}users`,
  }
  , review: {
    getCurrentUserReviews: `${Domain}reviews`,
    getReviews: (type: string, reference: string) => `${Domain}reviews/${type}/${reference}`,
  },
  location: {
    searchforlocation: (searchValue: string, limit: number, page: number) => `${Domain}destination/search?searchValue=${searchValue}&limit=${limit}&page=${page}`,
  }
};
export const auth = {
  login: `${Domain}auth/login`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
};
