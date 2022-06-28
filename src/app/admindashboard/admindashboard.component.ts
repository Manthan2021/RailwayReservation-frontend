import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private route:Router,private aService:AdminserviceService) { }

  
  ngOnInit(): void {
 //this.ademail= sessionStorage.getItem('ademail');

  }

}
