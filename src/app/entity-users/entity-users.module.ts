import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NTTMaterialModule } from '../core/NTTMaterialModule';
// components
import * as fromComponents from './components';
// containers
import * as fromContainers from './containers';
import { EntityUsersService } from './services/entity-users.service';
import { reducer } from './store';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('entityUsers', reducer),
    NTTMaterialModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
  providers: [EntityUsersService]
})

export class EntityUsersModule {
}
