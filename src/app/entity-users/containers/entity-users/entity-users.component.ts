import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';
import { EntityUsersService } from '../../services/entity-users.service';

import * as fromStore from '../../store';

@Component({
  selector: 'ntt-entity-users',
  templateUrl: './entity-users.component.html',
  styleUrls: ['./entity-users.component.scss']
})
export class EntityUsersComponent {
  users$: Observable<any>;

  constructor(
    private store: Store<fromStore.State>,
    private entityUsersService: EntityUsersService
  ) {
    this.users$ = store.pipe(select(fromStore.selectUsers));
    this.users$.subscribe(u => console.log(u));
  }

  onCreate(event: User) {
    this.entityUsersService.addUser(event);
  }
}
