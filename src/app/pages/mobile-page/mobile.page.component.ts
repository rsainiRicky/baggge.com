import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
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
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  serviceProvider;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  providers;
  constructor(private _formBuilder: FormBuilder, private store: Store<AppState>) {

    store.select('providers').subscribe(data => this.providers = data);
  }
  getProviders() {
    this.store.dispatch(new providerAction.GetProvidersAction());
  }
  ngOnInit() {
    this.getProviders();
    console.log(this.providers);
  }

}
