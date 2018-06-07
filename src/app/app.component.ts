import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { moveIn, fallIn } from './router.animations';
import { MaterializeAction } from 'angular2-materialize';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from './core/reducers';
import * as providerAction from './core/actions/providers.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  providers: Observable<any>;
  isLoading: Observable<any>;
  isModalOpen = false;
  isSignup = false;
  title = 'app';

  tiles = [
    { text: 'One', cols: 4, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 4, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
  ];

  constructor(private store: Store<fromStore.State>) {
    this.isLoading = store.select(fromStore.getAppProvider);
    this.providers = store.select(fromStore.getProvider);
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {
    this.store.dispatch(new providerAction.GetProviders());
  }

  togglePage() {
    console.log(this.isSignup);

    // tslint:disable-next-line:no-unused-expression
    this.isSignup ? false : true;
  }

}

