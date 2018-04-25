import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromForm from '../../form/store';
export interface AppState {
  form: any;
}

const initialState: AppState = {
  form: undefined
};

export const reducers: ActionReducerMap<AppState> = {
  form: fromForm.reducer
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
