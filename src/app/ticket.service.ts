import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl='http://localhost:6767/irctc/addTicket'
  baseUrl1='http://localhost:6767/irctc/getTicket'
  constructor(private http:HttpClient) { }

  newTicket(ticket:Object):Observable<Object>{

    return this.http.post(`${this.baseUrl}`,ticket);
  }

  getTicket(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`)
  }



}
