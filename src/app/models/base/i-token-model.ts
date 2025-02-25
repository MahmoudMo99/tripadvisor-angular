export interface ITokenModel {
  id: string;
  roles: string | string[];
  exp: number;
  nbf: number;
  iat: number;
}
