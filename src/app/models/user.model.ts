import {IAddress} from './address.model';

export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  address?: IAddress;
}
