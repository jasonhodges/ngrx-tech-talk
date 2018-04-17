import { IUser } from '../../../models/user.model';
import { UserActions, UserActionTypes } from '../actions';

export interface UserState {
  users: IUser[];
}

export const initialState: UserState = {
  users: []
};

export function reducer(
  state = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.CreateUser:
      return {
        ...state, users: action.payload.user
      };
    case UserActionTypes.UpdateUser:
      return;
    case UserActionTypes.DeleteUser:
      return;
  }
  return state;
}

export const getAllUsers = (state: UserState) => state.users;
