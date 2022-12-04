import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ezzing-angular';

  constructor() {
    const users = [
      { id: '1', firstName: 'Vanesa', lastName: 'Villena', age: 13 },
      { id: '2', firstName: 'Gaspar', lastName: 'Caro', age: 19 },
      { id: '3', firstName: 'Ignacio', lastName: 'Pérez', age: 18 },
      { id: '4', firstName: 'Laura', lastName: 'García', age: 15 },
      { id: '5', firstName: 'Ramiro', lastName: 'Valle', age: 28 }
    ];

    const adultUsers = users
      .filter(user => user.age >= 18)
      .map(user => ({...user, fullName: user.firstName + ' ' + user.lastName}));

    console.log(adultUsers);
  }
}
