import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IConfig } from '../../models/config.interface';

export namespace ConfigState {
  export interface IState {
    loading: boolean;
    config?: IConfig;
  }

  export const initialState: IState = {
    loading: false,
  };

  export const selectState = createFeatureSelector<IState>('config');

  export const selectConfig = createSelector(
    selectState,
    (state: IState): IConfig => state.config
  );

  export const selectProduction = createSelector(
    selectConfig,
    (config: IConfig): boolean => config.production
  );

  export const selectApiEndpoint = createSelector(
    selectConfig,
    (config: IConfig): string => config.apiEndpoint
  );
}
