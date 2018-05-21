import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { moveIn, fallIn } from './router.animations';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  isModalOpen = false;
  isSignup = false;
  title = 'app';

  tiles = [
    { text: 'One', cols: 4, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 4, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 4, rows: 1, color: 'lightpink' },
  ];
  isLoading = true;
  constructor() {
    this.isLoading = true;
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {
    // this.isLoading = false;
  }

  togglePage() {
    console.log(this.isSignup);

    // tslint:disable-next-line:no-unused-expression
    this.isSignup ? false : true;
  }

}

