import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  baseUrl='http://localhost:6767/irctc/getTrain'
  baseUrl1='http://localhost:6767/irctc/getReturnTrain'

  constructor(private http:HttpClient) { }

  getTrain(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getReturnTrain(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`)
  }


  
}
