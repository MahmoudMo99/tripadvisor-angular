import { environment } from '../environment/environemt.dev';
const Domain = environment.baseUrl;
export const auth = {
  login: `${Domain}auth/login`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
  };
