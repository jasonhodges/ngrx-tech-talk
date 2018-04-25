import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

import { IConfig } from '../models/config.interface';

@Injectable()
export class ConfigService {
  constructor() { }

  public getConfig(): Observable<IConfig> {
    return of(<IConfig>{ production: false, apiEndpoint: 'fakeEndpoint' }).pipe(
      delay(1000)
    );
  }
}
