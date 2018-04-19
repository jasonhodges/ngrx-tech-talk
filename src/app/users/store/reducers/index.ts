import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserActions, UserActionTypes } from '../actions';

// export type UserState = User[];
// export const initialState: UserState = [];

export interface State {
  user: User[];
}

const initialState: State = {
  user: []
};

export function reducer(
  state = initialState,
  action: UserActions
): State {
  switch (action.type) {
    case UserActionTypes.CreateUser:
      return {
        ...state,
        user: [...state.user, action.payload]
      };
    case UserActionTypes.UpdateUser:
      return;
    case UserActionTypes.DeleteUser:
      return;
    default: {
      return state;
    }
  }
}

export const getAllUsers = (state: State) => state.user;

export const getUserState = createFeatureSelector<State>('users');

export const getUsers = createSelector(
  getUserState,
  (state: State) => state.user
);
