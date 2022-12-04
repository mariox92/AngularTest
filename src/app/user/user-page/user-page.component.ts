import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-page',
  template: `
    <div class="row center-block">
      <h3>User page</h3>
    </div>
    <hr/>
    <user-form [users]="users"></user-form>
  `,
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  users: User[] = [
    { id: '1', name: 'Vanesa' },
    { id: '2', name: 'Gaspar' },
    { id: '3', name: 'Ignacio' },
    { id: '4', name: 'Laura' },
    { id: '5', name: 'Ramiro' }
  ];
}
