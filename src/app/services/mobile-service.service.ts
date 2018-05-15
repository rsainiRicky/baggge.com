import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MobileServiceService {

  constructor(private http: HttpClient) { }

  getProvider():Observable<any>{
    return this.http.get('./assets/provider.json');
  }

}
