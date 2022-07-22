export enum EUserRole {
  FILMMAKER,
  CONSUMER,
  CONSUMER_ADMINISTRATOR,
  ADMINISTRATOR,
}

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  role: EUserRole;
}
