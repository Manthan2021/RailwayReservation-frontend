import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  route: any;

  constructor() { }

  ngOnInit(): void {
  }
  getaccount(){
    console.log("hello");
    this.route.navigate(['/register']);
  }
}
