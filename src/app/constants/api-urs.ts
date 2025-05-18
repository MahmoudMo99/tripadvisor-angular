import { environment } from '../environment/environemt.dev';

const Domain = environment.baseUrl;
const withDomain = (path: string) => `${Domain}${path}`;

export const API = {
  auth: {
    register: withDomain('auth/register'),
    login: withDomain('auth/login'),
    logout: withDomain('auth/logout'),
    sendOtp: withDomain('auth/send-otp'),
    verifyOtp: withDomain('auth/verify-otp'),
    resetPassword: withDomain('auth/reset-password'),
  },
  attractives: {
    getAll: withDomain('attractives'),
    getById: (id: string) => withDomain(`attractives/${id}`),
    filter: withDomain('attractives/filter'),

  },

  hotels: {
    getAll: withDomain('hotels'),
    getById: (id: string) => withDomain(`hotels/${id}`),
    checkAvailability: (id: string) => withDomain(`hotels/${id}/availability`),
    filter: withDomain('hotels/filter'),
  },

  destination: {
    search: (searchValue: string) =>
      withDomain(`destination/search?searchValue=${searchValue}`),
    getAll: `${Domain}destination`


  },
  trips: {
    create: withDomain('trips'),
    getMyTrips: withDomain('trips'),
    addDateToTrip: (id: string) => withDomain(`trips/${id}/add-date`),
    invite: (id: string) => withDomain(`trips/${id}/invite`),
    share: (id: string) => withDomain(`trips/share/${id}`),
    getTripById: (tripId: string) => withDomain(`trips/${tripId}`),
    markComplete: (id: string) => withDomain(`trips/${id}/makeComplete`),
    delete: (id: string) => withDomain(`trips/${id}`),
    getSortedTrips: withDomain('trips/sorted'),
    makePublic: (id: string) => withDomain(`trips/${id}/make-public`),
  },
  booking: {
    create: withDomain('bookings'),
  },
  restaurant: {
    recentlyrestaurants: `${Domain}resturants`,
    getById: (id: string) => `${Domain}resturants/${id}`,
  },
  user: {
    getCurrentUser: `${Domain}users`,
  },
  review: {
    getCurrentUserReviews: `${Domain}reviews`,
    getReviews: (type: string, reference: string) =>
      `${Domain}reviews/${type}/${reference}`,
  },
  location: {
    searchforlocation: (searchValue: string, limit: number, page: number) =>
      `${Domain}destination/search?searchValue=${searchValue}&limit=${limit}&page=${page}`,
  },
};

export const auth = {
  login: `${Domain}auth/login`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
};
export { withDomain };
