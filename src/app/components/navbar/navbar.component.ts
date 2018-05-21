import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modalActions = new EventEmitter<string | MaterializeAction>();
  constructor() { }

  ngOnInit() {
  }

  loginModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }
}
