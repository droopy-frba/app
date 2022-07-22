import { IUser } from './user';

export interface IAPIResponse {
  success: boolean;
  errorMessage: string;
  statusCode: number;
  data: JSON[] | JSON;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}
