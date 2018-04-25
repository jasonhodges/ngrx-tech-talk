import { ConfigActions } from './config.actions';
import { ConfigState } from './config.state';

export namespace ConfigReducer {
  export function reducer(
    state: ConfigState.IState = ConfigState.initialState,
    action: ConfigActions.Actions
  ): ConfigState.IState {
    switch (action.type) {
      case ConfigActions.Types.GET_CONFIG:
        return {
          ...state,
          loading: true,
          config: null,
        };

      case ConfigActions.Types.GET_CONFIG_SUCCESS:
        return {
          ...state,
          loading: false,
          config: action.payload,
        };

      case ConfigActions.Types.GET_CONFIG_ERROR:
        return {
          loading: false,
          ...state,
        };

      default: return state;
    }
  }
}
