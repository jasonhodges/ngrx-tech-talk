import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum EntityUserActionTypes {
  CreateUser = '[EntityUser] CreateUser',
  UpdateUser = '[EntityUser] UpdateUser',
  DeleteUser = '[EntityUser] DeleteUser',
}

export class CreateUser implements Action {
  readonly type = EntityUserActionTypes.CreateUser;

  constructor(public payload: User) {
  }
}

export class UpdateUser implements Action {
  readonly type = EntityUserActionTypes.UpdateUser;

  constructor(public payload: User | User[]) {
  }
}

export class DeleteUser implements Action {
  readonly type = EntityUserActionTypes.DeleteUser;

  constructor(public payload: any) {
  }
}

export type EntityUserActions =
  CreateUser
  | UpdateUser
  | DeleteUser;
