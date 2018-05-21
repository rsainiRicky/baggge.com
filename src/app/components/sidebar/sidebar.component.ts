import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
