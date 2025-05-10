export interface ItripInviteRes {
  shareableLink: string;
  tripName: string;
  contributors: Contributor[];
}

export interface Contributor {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isOwner: boolean;
}
