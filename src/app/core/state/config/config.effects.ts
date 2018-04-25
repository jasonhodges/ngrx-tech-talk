import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ConfigService } from '../../services/config.service';
import { ConfigActions } from './config.actions';

@Injectable()
export class ConfigEffects {

  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType(ConfigActions.Types.GET_CONFIG),
    switchMap((action: ConfigActions.GetConfig) => {
      return this._configService
        .getConfig()
        .pipe(
          map((config) => (new ConfigActions.GetConfigSuccess(config))),
          catchError((error) => of(new ConfigActions.GetConfigError(error)))
        );
    }),
  );

  @Effect({ dispatch: false })
  getConfigSuccess$ = this._actions$.pipe(
    ofType(ConfigActions.Types.GET_CONFIG_SUCCESS),
    tap((action: ConfigActions.GetConfigSuccess) => console.log('Get Config Success Effect'))
  );

  constructor(
    private _actions$: Actions,
    private _configService: ConfigService,
  ) { }
}
