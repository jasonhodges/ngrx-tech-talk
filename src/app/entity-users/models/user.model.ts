import { Address } from './address.model';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  address: Address[];
}
