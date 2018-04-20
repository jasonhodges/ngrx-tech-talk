import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../models/user.model';
import * as fromStore from '../store';

enum UserActions {
  'added' = 'CreateUser'
}

@Injectable()
export class UsersService {
  userSub: Subscription;
  users$: Observable<User[]>;
  usersInState: any[];
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private store: Store<fromStore.State>, private afs: AngularFirestore) {
    this.users$ = store.pipe(select(fromStore.getUsers));
    this.users$.subscribe(res => {
      console.log('res:', res);
      this.usersInState = res;
      console.log('usersInState:', this.usersInState);
    });
    this.usersCollection = afs.collection<User>('users');
    this.userSub = this.getUserDataStateChanges()
      .subscribe(actions => {
        actions.forEach(action =>
          this.usersToState(action)
        );
      });
  }

  getUserDataStateChanges(): Observable<DocumentChangeAction[]> {
    return this.afs.collection<User>('users').snapshotChanges(['added']);
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }

  usersToState(action: any) {
    console.log(`usersToState action: ${action.payload.doc.id}`);
    const idExist = this.usersInState.filter(e => e.id === action.payload.doc.id)[0];
    if (idExist) {
      return;
    } else {
      return this.store.dispatch({
        type: `[User] ${UserActions[action.type]}`,
        payload: {
          id: action.payload.doc.id,
          user: action.payload.doc.data()
        }
      });
    }
  }
}
