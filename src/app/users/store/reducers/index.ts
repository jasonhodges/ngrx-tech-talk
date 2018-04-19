import { User } from '../../models/user.model';
import { UserActions, UserActionTypes } from '../actions';

export type UserState = User[];
export const initialState: UserState = [];

export function reducer(
  state = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.CreateUser:
      return [...state, action.payload];
    case UserActionTypes.UpdateUser:
      return;
    case UserActionTypes.DeleteUser:
      return;
    default: {
      return state;
    }
  }
}

export const getAllUsers = (state: UserState) => state;
