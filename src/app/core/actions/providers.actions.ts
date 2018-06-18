import { Action } from '@ngrx/store';
import { PROVIDER } from '../interfaces/providers.interface';

export const GET_PROVIDERS = '[Get] Provider';
export const GET_PROVIDERS_SUCCESS = '[Get] Provider Success';
export const GET_PROVIDERS_FAILED = '[Get] Provider Failed';


export class GetProvidersAction implements Action {
  readonly type = GET_PROVIDERS;
  constructor() { }
}

export class GetProvidersSuccessAction implements Action {
  readonly type = GET_PROVIDERS_SUCCESS;
  constructor(public payload: PROVIDER) { }
}

export class GetProvidersFailedAction implements Action {
  readonly type = GET_PROVIDERS_FAILED;
  constructor(public payload: any) { }
}

export type Action
  = GetProvidersAction
  | GetProvidersSuccessAction
  | GetProvidersFailedAction;

