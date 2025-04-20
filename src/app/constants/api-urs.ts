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
  }
};
export const auth = {
  login: `${Domain}auth/login`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
};
