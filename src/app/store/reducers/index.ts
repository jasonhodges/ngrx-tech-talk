import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { ConfigReducer, ConfigState } from '../../core/state/config';
import * as fromForm from '../../form/store';

export interface AppState {
  form: any;
  config: ConfigState.IState;
}

export const reducers: ActionReducerMap<AppState> = {
  form: fromForm.reducer,
  config: ConfigReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('Initial AppState', state);
    console.log('action', action);
    const newState = reducer(state, action);
    console.log('Modified AppState', newState);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];

