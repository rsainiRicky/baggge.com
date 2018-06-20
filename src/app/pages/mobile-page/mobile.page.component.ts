import { Component, OnInit, EventEmitter, ViewChild, Provider } from '@angular/core';
import { MobileService } from '../../services/mobile-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { moveIn, fallIn } from '../../router.animations';
import { AppState } from '../../core/interfaces/providers.interface';
import * as providerAction from '../../core/actions/providers.actions';
import * as fromRoot from '../../core/reducers/index';
import { select, Store } from '@ngrx/store';
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
  providers$: any = [];
  circles$: any = [];
  selectedProvider = 'operator';
  selectedCircle = 'circle';
  constructor(private _formBuilder: FormBuilder, private mobileService: MobileService) { }

  getProviders() {
    this.mobileService.getProvider().subscribe(res => {
      for (let i = 0; i < Object.keys(res['providers']).length; i++) {
        if (res['providers'][i].service === 'Mobile Recharge') {
          this.providers$.push(res['providers'][i]);
        }
      }
    });
  }

  getCircle() {
    this.mobileService.getCircle().subscribe(res => {
      this.circles$ = res['circles'];
    });
  }

  checkProvider(mobileNumber) {
    this.mobileService.lookUpProvider(mobileNumber).subscribe(res => {
      this.providers$.forEach(element => {
        if (element.provider_name.toLowerCase() === res['operator'].toLowerCase()) {
          this.selectedProvider = element.provider_code;
          return;
        }
      });
      this.circles$.forEach(element => {
        if (element.circle_name.toLowerCase() === res['circle'].toLowerCase()) {
          this.selectedCircle = element.circle_id;
        }
      });
    });
  }

  ngOnInit() {
    this.getProviders();
    this.getCircle();
    this.mobileService.getPlans().subscribe(res => {
      console.log(res);
    });
  }

}
