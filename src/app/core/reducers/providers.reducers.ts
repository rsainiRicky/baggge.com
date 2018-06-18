import * as ProviderAction from '../actions/providers.actions';
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

export function reducer(state = initialState, action: ProviderAction.Action) {
  switch (action.type) {
    // case ProviderAction.GET_PROVIDERS: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isLoadSuccess: false,
    //     providers: []
    //   };
    // }
    // case ProviderAction.GET_PROVIDERS_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isLoadSuccess: true,
    //     providers: action.payload
    //   };
    // }
    // case ProviderAction.GET_PROVIDERS_FAILED: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isLoadSuccess: false,
    //     providers: []
    //   };
    // }
    case ProviderAction.GET_PROVIDERS_SUCCESS: {
      return Object.assign({}, state.providers)
    }
    default: {
      return state;
    }
  }
}
export const getallProviders = (state: State) => state.providers;
