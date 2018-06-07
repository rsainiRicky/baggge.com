import * as Action from '../actions/providers.actions';
import { PROVIDER } from '../interfaces/providers.interface';

export interface State {
  isLoading: boolean;
  isLoadSuccess: boolean;
  providers: Array<PROVIDER>;
}

export const initialState: State = {
  isLoading: false,
  isLoadSuccess: false,
  providers: []
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.GET_PROVIDERS: {
      return {
        ...state,
        isLoading: true,
        isLoadSuccess: false,
        providers: []
      };
    }
    case Action.GET_PROVIDERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: true,
        providers: action.payload
      };
    }
    case Action.GET_PROVIDERS_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: false,
        providers: []
      };
    }
    default: {
      return state;
    }
  }
}
