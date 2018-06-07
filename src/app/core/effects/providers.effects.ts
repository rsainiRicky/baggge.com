import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as Act from '../actions/providers.actions';
import { MobileService } from '../../services/mobile-service.service';

@Injectable()
export class GetProvidersEffects {
  constructor(public actions$: Actions, private providerService: MobileService) { }
  @Effect() providers$ = this.actions$.ofType(Act.GET_PROVIDERS)
    .debounceTime(2000)
    .mergeMap(payload => {
      return this.providerService.getProvider().map(data => {
        return [new Act.GetProvidersSuccess({ data: data })];
      }, error => {
        return [new Act.GetProvidersFailed({ error: error })];
      });
    });
}
