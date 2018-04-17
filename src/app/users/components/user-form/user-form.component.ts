import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../../../models/user.model';

@Component({
  selector: 'ntt-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() create = new EventEmitter<IUser>();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      streetAddress: '',
      cityAddress: '',
      stateAddress: '',
      zipcodeAddress: ''
    });
  }

  createUser(form: FormGroup) {
    const { value } = form;
    this.create.emit(value);
  }
  onSubmit() {

  }
}
