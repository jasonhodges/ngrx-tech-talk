import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

import * as fromStore from '../../store';

@Component({
  selector: 'ntt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<fromStore.State>) {
    this.users$ = store.pipe(select(fromStore.getUsers));
  }

  ngOnInit() {
    this.users$.subscribe(res => console.log(res));
  }

  onCreate(event: User) {
    this.store.dispatch(new fromStore.CreateUser(event));
  }
}
