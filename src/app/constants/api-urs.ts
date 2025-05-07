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

// import { environment } from '../environment/environemt.dev';
// const Domain = environment.baseUrl;
// const auth = {
//   login: `${Domain}auth/login`,
// };
