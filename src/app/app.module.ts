import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment';
import { AppComponent } from './containers/app/app.component';
import { NTTMaterialModule } from './core/NTTMaterialModule';
import { ConfigService } from './core/services/config.service';
import { ConfigEffects } from './core/state/config';
import { EntityUsersComponent } from './entity-users/containers';
import { EntityUsersModule } from './entity-users/entity-users.module';
import { metaReducers, reducers } from './store/reducers';
import { UsersComponent } from './users/containers';
import { UsersModule } from './users/users.module';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' },
  { path: 'users', component: UsersComponent },
  { path: 'entity-users', component: EntityUsersComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NTTMaterialModule,
    UsersModule,
    EntityUsersModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AngularFireModule.initializeApp(environment.firebase, 'ngrx-tech-talk'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    EffectsModule.forRoot([ConfigEffects])
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
