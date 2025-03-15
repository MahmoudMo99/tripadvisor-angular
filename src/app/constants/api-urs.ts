import { environment } from '../environment/environemt.dev';
const Domain = environment.baseUrl;
export const auth = {
  login: `${Domain}auth/login`,
  // trends: `${Domain}trends`,
  attractiveHome: `${Domain}attractives`,
  destinationHome: `${Domain}destination`,
  // travelCreator: `${Domain}travel-creators`
  };
