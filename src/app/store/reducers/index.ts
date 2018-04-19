import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUsers from '../../users/store';

export interface State {
  standard: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  standard: fromUsers.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('Initial State', state);
    console.log('action', action);
    const newState = reducer(state, action);
    console.log('Modified State', newState);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
