import { Action } from '@ngrx/store';

export enum FormActionTypes {
  UpdateForm = '[Form] UpdateForm'
}

export class UpdateForm implements Action {
  readonly type = FormActionTypes.UpdateForm;

  constructor(public payload: any) {
  }
}

export type FormActions = UpdateForm;
