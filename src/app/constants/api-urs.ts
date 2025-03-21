import { environment } from '../environment/environemt.dev';  

const Domain = environment.baseUrl;

export const API = {
  auth: {
    login: `${Domain}auth/login`,
  },
  attractives: {
    getAll: `${Domain}attractives`,
    getById: (id: string) => `${Domain}attractives/${id}`,
  }
};
export const auth = {
  login: `${Domain}auth/login`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
  };
