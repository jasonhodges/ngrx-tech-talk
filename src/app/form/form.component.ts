import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import * as actions from '../store/actions';
import * as fromStore from './store';

@Component({
  selector: 'ntt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  @ViewChild(NgForm) private ngForm: NgForm;
  form$: Observable<any> = this.store.pipe(select(fromStore.getFormState));
  form = this.formBuilder.group({
    firstName: [''],
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
        this.store.dispatch(new actions.UpdateForm(value));
      });
  }

  onSubmit() {
    // possibly submit to fake service
    this.ngForm.resetForm();
  }

}
