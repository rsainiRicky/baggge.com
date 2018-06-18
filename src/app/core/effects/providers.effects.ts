import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as ProviderActions from '../actions/providers.actions';
import { MobileService } from '../../services/mobile-service.service';

@Injectable()
export class GetProvidersEffects {
  constructor(private actions$: Actions, private providerService: MobileService) { }

  @Effect() loadProviders$ = this.actions$.ofType(ProviderActions.GET_PROVIDERS)
    .switchMap(() => this.providerService.getProvider()
      .map(providers => {
        console.log(providers);
        return new ProviderActions.GetProvidersSuccessAction(providers['providers']);
      })
    );
}
