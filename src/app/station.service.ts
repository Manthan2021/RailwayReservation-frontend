import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StationService {

baseUrl='http://localhost:6767/irctc/addStation'
baseUrl1='http://localhost:6767/irctc/getStation'
baseUrl2='http://localhost:6767/irctc/getReturnStation'
baseUrl3='http://localhost:6767/irctc/getallstations'

constructor(private http:HttpClient) { }

  newStation(station:Object):Observable<Object>{
  
    return this.http.post(`${this.baseUrl}`,station);
  }

  getStation(id:any):Observable<any>{

    return this.http.get(`${this.baseUrl1}/${id}`)
  }

  getReturnStation(id:any):Observable<any>{

    return this.http.get(`${this.baseUrl2}/${id}`)
  }

  getAllStations():Observable<any>{
  return this.http.get(`${this.baseUrl3}`);
  }


}
