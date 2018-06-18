import { Component, OnInit, EventEmitter, ViewChild, Provider } from '@angular/core';
import { MobileService } from '../../services/mobile-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { moveIn, fallIn } from '../../router.animations';
import { AppState } from '../../core/interfaces/providers.interface';
import * as providerAction from '../../core/actions/providers.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-mobile.page',
  templateUrl: './mobile.page.component.html',
  styleUrls: ['./mobile.page.component.scss']
})
export class MobilePageComponent implements OnInit {

  serviceProvider;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  providers$: Observable<Provider>;
  constructor(private _formBuilder: FormBuilder, private store: Store<AppState>) {


  }
  getProviders() {
    this.store.dispatch(new providerAction.GetProvidersAction());
  }
  ngOnInit() {
    this.getProviders();
    this.providers$ = this.store.select(state => state.providers);

  }

}
