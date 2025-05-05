import { environment } from '../environment/environemt.dev';

const Domain = environment.baseUrl;
const withDomain = (path: string) => `${Domain}${path}`;

export const API = {
  auth: {
    login: withDomain('auth/login'),
  },
  attractives: {
    getAll: withDomain('attractives'),
    getById: (id: string) => withDomain(`attractives/${id}`),
  },
  destination: {
    search: (searchValue: string) =>
      withDomain(`destination/search?searchValue=${searchValue}`),
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
  restaurant:{
    recentlyrestaurants: `${Domain}resturants`,
    getById: (id: string) => `${Domain}resturants/${id}`,

  }
};

export const auth = {
  login: `${Domain}auth/login`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
};


