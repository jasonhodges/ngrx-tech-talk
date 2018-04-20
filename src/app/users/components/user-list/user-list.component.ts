import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ntt-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users;let i = index;">
        {{user?.user?.firstName}} {{user?.user?.lastName}}
      </li>
    </ul>
  `
})

export class UserListComponent {
  @Input() users: User[];

  constructor() {
  }
}
