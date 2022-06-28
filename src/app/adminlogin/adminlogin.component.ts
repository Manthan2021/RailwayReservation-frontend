import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  ademail = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  checkLogin() {
    
    if(this.ademail==="admin" && this.password==="admin"){
      sessionStorage.setItem('ademail', this.ademail);
      this.loginSuccess=true;
      this.route.navigate(['/admin-dashboard']);
    }

}
}
