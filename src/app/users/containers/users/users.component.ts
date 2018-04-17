import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../../models/user.model';

import * as fromStore from '../../store';

@Component({
  selector: 'ntt-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(private store: Store<fromStore.UserState>) {
  }

  ngOnInit() {
    // this.users$ = this.store.select(fromStore.);
  }

  onCreate(event: IUser) {
    this.store.dispatch(new fromStore.CreateUser(event));
  }
}
