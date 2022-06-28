import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumerService } from '../consumer.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;

  constructor(private route:Router , private cService:ConsumerService) { }

  ngOnInit(): void {
  }
  
  checkLogin() {
    let consumer = { "email": this.email, "password": this.password};
    console.log(consumer);

    this.cService.login(consumer).subscribe((response) => {
      console.log(response);

      if (response) {
        this.route.navigate(['/dashboard']);

        sessionStorage.setItem('email', this.email);
    
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      } else {
        this.invalidLogin = true;
      }
    });

    this.loginSuccess = false;
    
  }

}
