import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  baseUrl='http://localhost:6767/irctc/getTrain'
  baseUrl1='http://localhost:6767/irctc/getReturnTrain'
  baseUrl2='http://localhost:6767/irctc/updatetraincapacity'
  baseUrl3='http://localhost:6767/irctc/addtrain'
  baseUrl4='http://localhost:6767/irctc/addreturntrain'
  baseUrl5='http://localhost:6767/irctc/getResultant'
  baseUrl6= 'http://localhost:6767/irctc/gettheStation'
  baseUrl7='http://localhost:6767/irctc/trains'

  constructor(private http:HttpClient) { }

  getTrain(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getReturnTrain(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`)
  }

  updateTrain(id:number,value:object):Observable<any>{
   return this.http.put(`${this.baseUrl2}/${id}`,value);
  }
  // updateProduct(id:number,value:object):Observable<Object>{

  //   return this.http.put(`${this.baseUrl2}/${id}`,value);
  // }
  addtrain(train:Object):Observable<Object>{  
    return this.http.post(`${this.baseUrl3}`,train);
  }
  
  addreturntrain(train:Object):Observable<Object>{
   return this.http.post(`${this.baseUrl4}`,train);
  }

  findTrains(id1:any,id2:any):Observable<any>{
  return this.http.get(`${this.baseUrl5}/${id1}/${id2}`);
  }

  getTrainId(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl6}/${id}`);
  }

  getTrainList():Observable<any>{
    return this.http.get(`${this.baseUrl7}`);
  }


}
