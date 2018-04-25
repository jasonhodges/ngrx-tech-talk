import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import * as actions from '../store/actions';
import * as fromStore from './store';

@Component({
  selector: 'ntt-form',
  template: `
    <form #ngForm="ngForm"
          (ngSubmit)="onSubmit()">
      <input type="text"
             name="name"
             [ngModel]="(form$ | async).name">
      <select name="shirtColor"
              id="shirtColor"
              [ngModel]="(form$ | async).shirtColor">
        <option value="blue">BLUE</option>
        <option value="green">GREEN</option>
        <option value="magenta">MAGENTA</option>
      </select>
      <select name="shirtSize"
              id="shirtSize"
              [ngModel]="(form$ | async).shirtSize">
        <option value="xs">xs</option>
        <option value="s">s</option>
        <option value="m">m</option>
        <option value="l">l</option>
        <option value="xl">xl</option>
        <option value="xxl">xxl</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  @ViewChild(NgForm) private ngForm: NgForm;
  form$: Observable<any> = this.store.pipe(select(fromStore.getFormState));
  form = this.formBuilder.group({
    name: [''],
    shirtColor: [''],
    shirtSize: ['']
  });

  constructor(
    private store: Store<fromStore.State>,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.ngForm.valueChanges.debounceTime(0)
      .subscribe(value => {
        console.log('ngForm.valueChanges', value);
        this.store.dispatch(new actions.UpdateForm(value))
      });
  }

  onSubmit() {
    // possibly submit to fake service
    this.ngForm.resetForm();
  }

}
