import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../models/user.model';
import * as fromStore from '../store';

enum EntityUserActions {
  'added' = 'CreateUser'
}

@Injectable()
export class EntityUsersService {
  userSub: Subscription;
  users$: Observable<any>;
  usersInState: any[];
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private store: Store<fromStore.State>, private afs: AngularFirestore) {
    this.users$ = store.pipe(select(fromStore.getSelectedUser));
    this.users$.subscribe(res => {
      this.usersInState = res;
    });
    this.usersCollection = afs.collection<User>('entity-users');
    this.userSub = this.getUserDataStateChanges()
      .subscribe(actions => {
        actions.forEach(action =>
          this.usersToState(action)
        );
      });
  }

  getUserDataStateChanges(): Observable<DocumentChangeAction[]> {
    return this.afs.collection<User>('entity-users').snapshotChanges(['added']);
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }

  usersToState(action: any) {
    console.log(`usersToState action: ${action.payload.doc.id}`);
    let idExist;
    idExist = this.usersInState
      ? this.usersInState.filter(e => e.id === action.payload.doc.id)[0]
      : undefined;
    if (idExist) {
      return;
    } else {
      return this.store.dispatch({
        type: `[EntityUser] ${EntityUserActions[action.type]}`,
        payload: {
          id: action.payload.doc.id,
          user: action.payload.doc.data()
        }
      });
    }
  }
}
