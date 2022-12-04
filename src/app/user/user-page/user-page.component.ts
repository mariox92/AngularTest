import { Component } from '@angular/core';
import { User } from '../user';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'user-page',
  template: `
    <div class="row center-block">
      <h3>User page</h3>
    </div>
    <hr/>
    <user-form [users]="users" (formReady)="form = $event"></user-form>
    <div class="content-block">
      <button class="btn btn-default" (click)="checkValidForm()">Check form</button>
    </div>
  `,
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  form: FormGroup;

  users: User[] = [
    { id: '1', name: 'Vanesa' },
    { id: '2', name: 'Gaspar' },
    { id: '3', name: 'Ignacio' },
    { id: '4', name: 'Laura' },
    { id: '5', name: 'Ramiro' }
  ];

  checkValidForm(): void {
    console.log('Form is ' + (this.form.valid ? 'valid' : 'invalid'));
  }
}
