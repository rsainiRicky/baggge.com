import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MobileService {
  API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProvider() {
    return this.http.get(this.API_URL + '/providers');
  }

  lookUpProvider(mobileNumber) {
    return this.http.get(this.API_URL + '/findProvider/' + mobileNumber);
  }

  getCircle() {
    return this.http.get(this.API_URL + '/getCircle');
  }

  getPlans() {
    return this.http.get(this.API_URL + '/getPlans');
  }
}
