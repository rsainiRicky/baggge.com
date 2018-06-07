import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { moveIn, fallIn } from './router.animations';
import { MaterializeAction } from 'angular2-materialize';
import { Observable } from 'rxjs/Observable';

import * as fromStore from './core/reducers';
import * as providerAction from './core/actions/providers.actions';

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

  tiles = [
    { text: 'One', cols: 4, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 4, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
  ];

  constructor() {

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

