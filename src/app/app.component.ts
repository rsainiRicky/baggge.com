import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn, fallIn } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isModalOpen = false;
  title = 'app';
  menuList = [{ 'name': 'Mobile', 'font': 'smartphone', 'link': 'mobile' },
  { 'name': 'DTH', 'font': 'tv', 'link': 'dth' },
  { 'name': 'Data Card', 'font': 'usb', 'link': 'datacard' },
  { 'name': 'Electricity', 'font': 'wb_incandescent', 'link': 'electricity' },
  { 'name': 'Landline', 'font': 'local_phone', 'link': 'landline' },
  { 'name': 'Broadband', 'font': 'router', 'link': 'broadband' },
  { 'name': 'Gas', 'font': 'whatshot', 'link': 'gas' },
  { 'name': 'Water', 'font': 'invert_colors', 'link': 'water' },
  { 'name': 'Metro', 'font': 'directions_subway', 'link': 'metro' },
  { 'name': 'Offers', 'font': 'local_offer', 'link': 'offers' }];
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

  loginModal() {
    this.isModalOpen = true;
  }
}

