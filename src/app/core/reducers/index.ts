
import * as fromProvider from './providers.reducers';
import { createSelector } from '@ngrx/store';

export interface State {
  providers: fromProvider.State;
}

export const reducers = {
  provider: fromProvider.reducer
};

export const getAppProvider = (state: State) => state.providers;

export const getProvider = createSelector(
  getAppProvider,
  (state: fromProvider.State) => {
    return state.providers;
  }
);

export const getIsLoading = createSelector(
  getAppProvider, (state: fromProvider.State) => {
    return state.isLoading;
  }
);
