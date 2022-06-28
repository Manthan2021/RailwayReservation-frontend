import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumer } from '../consumer';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  consumer:Consumer|any;

  constructor(private route:Router,private cService:ConsumerService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('email');
    this.gettheConsumer();
    
  }

  gettheConsumer(){
   this.cService.getConsumer(this.user).subscribe(
    (data) => {
      this.consumer=data;
      console.log(this.consumer);
    },
    (error) => console.log(error)
    );
  }
  
  bookticket() {
    this.route.navigate(['/findtrain']);
  }

  getalltrains() {
    this.route.navigate(['/getalltrains']);
  }



  }





