import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../../models/address.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'ntt-entity-user-form',
  templateUrl: './entity-user-form.component.html',
  styleUrls: ['./entity-user-form.component.scss']
})
export class EntityUserFormComponent {
  @Output() create = new EventEmitter<User>();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      address: this.fb.group(new Address())
    });
  }

  createUser(form: FormGroup) {
    const { value } = form;
    this.create.emit(value);
    this.userForm.reset();
  }
}
