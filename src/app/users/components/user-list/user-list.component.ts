import { Component, Input } from '@angular/core';

@Component({
  selector: 'ntt-user-list',
  template: `
    <ul>
      <li *ngFor="let u of users;">
        {{u.user?.firstName}} {{u.user?.lastName}}
      </li>
    </ul>
  `
})

export class UserListComponent {
  @Input() users: any;

  constructor() {
  }
}
