import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationreturnService {

  baseUrl='http://localhost:6767/irctc/addReturnStation'

  constructor(private http:HttpClient) { }

  newStation(station:Object):Observable<Object>{
    
  return this.http.post(`${this.baseUrl}`,station);
  }


}
