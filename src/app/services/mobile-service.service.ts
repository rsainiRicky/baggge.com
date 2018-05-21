import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MobileServiceService {

  constructor(private http: HttpClient) { }

  getProvider() {
    return this.http.get('http://localhost:8000/api/cats');
  }

}
