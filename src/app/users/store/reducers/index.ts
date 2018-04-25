import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserActions, UserActionTypes } from '../actions';

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
      // if (state.user.length === 10) {
      //   state.user.shift();
      // }
      return { user: [...state.user, action.payload] };
    case UserActionTypes.UpdateUser:
      return;
    case UserActionTypes.DeleteUser:
      return;
    default: {
      return state;
    }
  }
}

/**
 * Feature Selector for User AppState.
 * @type {MemoizedSelector<object, State>}
 */
export const getUserState = createFeatureSelector<State>('users');

/**
 * Selector to get array of each 'user' object from state.
 * @type {MemoizedSelector<object, User[]>}
 */
export const getUsers = createSelector(
  getUserState,
  (state: State) =>  state.user
);
