import { createFeatureSelector } from '@ngrx/store';
import { FormActions, FormActionTypes } from '../../store/actions';
import { AppState } from '../../store/reducers';

export interface State extends AppState {
  form: Form;
}

export interface Form {
  firstName: string;
  shirtColor: string;
  shirtSize: string;
}
export const initialState: Form = {
  firstName: '',
  shirtColor: '',
  shirtSize: ''
};

export function reducer(
  state: Form = initialState,
  action: FormActions
): Form {
  switch (action.type) {
    case FormActionTypes.UpdateForm:
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
}

export const getFormState = createFeatureSelector('form');
