import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/user.model';
import { EntityUserActions, EntityUserActionTypes } from '../actions';

export interface State extends EntityState<User> {
  entities: {};
  selectedUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id
});


export const initialState: State = adapter.getInitialState({
  entities: {},
  selectedUserId: null
});

export function reducer(
  state = initialState,
  action: EntityUserActions
): State {
  switch (action.type) {
    case EntityUserActionTypes.CreateUser: {
      // return adapter.addOne(action.payload.user, state)
      return adapter.addOne(action.payload, {
        ...state,
        selectedUserId: state.selectedUserId
      });
    }
    default: {
      return state;
    }
  }
}

export const getSelectedUser = (state: State) => state.selectedUserId;

export const {
  // select the array of user ids
  // selectIds: selectUserIds,

  // select the dictionary of user entities
  // selectEntities: selectUserEntities,

  // select the array of users
  selectAll: selectAllUsers,

  // select the total user count
  // selectTotal: selectUserTotal
} = adapter.getSelectors();

export const selectUserState = createFeatureSelector<State>('entityUsers');

export const selectUsers = createSelector(selectUserState, selectAllUsers);
