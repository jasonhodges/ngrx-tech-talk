import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AngularFirestore } from 'angularfire2/firestore';

import { IConfig } from '../../core/models/config.interface';
import { ConfigActions, ConfigState } from '../../core/state/config';

@Component({
  selector: 'ntt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(db: AngularFirestore, private _store: Store<ConfigState.IState>) {
    _store.dispatch(new ConfigActions.GetConfig());

    _store.pipe(
      select(ConfigState.selectConfig),
    ).subscribe(
      (config: IConfig) => console.log('config', config)
    );
  }
}
