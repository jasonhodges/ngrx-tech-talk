import { Component, Input } from '@angular/core';

@Component({
  selector: 'ntt-entity-user-list',
  template: `
    <ul>
      <li *ngFor="let u of users; let i = index;">
        {{u.user?.firstName}} {{u.user?.lastName}}
      </li>
    </ul>
  `,
  styleUrls: ['./entity-user-list.component.scss']
})
export class EntityUserListComponent {
  @Input() users: any;

  constructor() {
  }
}
