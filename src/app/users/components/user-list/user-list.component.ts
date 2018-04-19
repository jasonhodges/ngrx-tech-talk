import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ntt-user-list',
  template: `
    <ul>
      <!--<li *ngFor="let user of users">{{user.firstName}}</li>-->
      {{ users[0]?.firstName }}
    </ul>
  `
})

export class UserListComponent implements OnInit {
  @Input() users: User[];

  constructor() {
  }

  ngOnInit() {
  }
}
