import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() users: User[];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      users: this.formBuilder.array([])
    });

    this.initializeUsersForm();

    // To listen for ANY change in the array (including adding/removing users)
    this.usersForm.valueChanges.subscribe(() => console.log('Changes in users array'));
  }

  initializeUsersForm(): void {
    if (this.users) {
      for (const user of this.users) {
        this.addUser(user);
      }
    }
  }

  addUser(user?: User): void {
    const userControls = this.formBuilder.group({
      name: new FormControl(user ? user.name : null, [
        Validators.required,
        Validators.maxLength(50)
      ])
    });

    // To listen for changes in each user
    userControls.valueChanges.subscribe(value => {
      console.log('Changes in user ' + (this.usersForm.controls.indexOf(userControls) + 1) + ': ' + JSON.stringify(value));
    });

    this.usersForm.push(
      userControls
    );
  }

  removeUser(index: number): void {
    this.usersForm.removeAt(index);
  }

  get usersForm() {
    return this.form.controls['users'] as FormArray;
  }

}
