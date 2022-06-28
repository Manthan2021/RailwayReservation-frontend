import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

baseUrl='http://localhost:6767/irctc/consumer'
baseUrl1='http://localhost:6767/irctc/consumerlogin'
baseUrl2='http://localhost:6767/irctc/getConsumer'

  constructor(private http:HttpClient) { }
 
  newConsumer(consumer:Object):Observable<Object>{
  
    return this.http.post(`${this.baseUrl}`,consumer);
  }

  login(consumer: any): Observable<any> {
    return this.http.post(`${this.baseUrl1}`, consumer);
  }

  getConsumer(custEmail:any):Observable<any>{
    return this.http.get(`${this.baseUrl2}/${custEmail}`);
  }

  logOut() {
    sessionStorage.removeItem('email');
  }


}
