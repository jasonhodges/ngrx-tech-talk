import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NTTMaterialModule } from '../core/NTTMaterialModule';
import { reducer } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', reducer),
    NTTMaterialModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})

export class UsersModule {
}
