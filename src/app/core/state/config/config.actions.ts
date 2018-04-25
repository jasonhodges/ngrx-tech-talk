import { Action } from '@ngrx/store';

import { IConfig } from '../../models/config.interface';

export namespace ConfigActions {
  export enum Types {
    GET_CONFIG = '[Config] GetConfig',
    GET_CONFIG_SUCCESS = '[Config] GetConfig Success',
    GET_CONFIG_ERROR = '[Config] GetConfig Error',
  }

  export class GetConfig implements Action {
    readonly type = Types.GET_CONFIG;
    constructor() { }
  }

  export class GetConfigSuccess implements Action {
    readonly type = Types.GET_CONFIG_SUCCESS;
    constructor(public payload: IConfig) { }
  }

  export class GetConfigError implements Action {
    readonly type = Types.GET_CONFIG_ERROR;
    constructor(public error: any) { }
  }

  export type Actions
    = GetConfig
    | GetConfigSuccess
    | GetConfigError;
}
