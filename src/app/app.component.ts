import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { moveIn, fallIn } from './router.animations';
import { MaterializeAction } from 'angular2-materialize';
import { Observable } from 'rxjs/Observable';

import * as fromStore from './core/reducers';
import * as providerAction from './core/actions/providers.actions';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  isLoading: Observable<any>;
  isModalOpen = false;
  isSignup = false;
  title = 'app';
  isAccount = false;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      // tslint:disable-next-line:no-unused-expression
      (event instanceof NavigationStart) ? (event.url === '/account') ? this.isAccount = true : this.isAccount = false : '';
    });
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {
  }

  togglePage() {
    console.log(this.isSignup);

    // tslint:disable-next-line:no-unused-expression
    this.isSignup ? false : true;
  }

}

