import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('ademail')
    console.log(!(user === null))
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('ademail')
  }

}
