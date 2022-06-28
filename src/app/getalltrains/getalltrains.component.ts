import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { TrainService } from '../train.service';
import { Train } from '../train';
import { Router } from '@angular/router';



@Component({
  selector: 'app-getalltrains',
  templateUrl: './getalltrains.component.html',
  styleUrls: ['./getalltrains.component.css']
})
export class GetalltrainsComponent implements OnInit {

  trains:Observable<Train[]>|any;
  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

reloadData(){
this.trains=this.tService.getTrainList();
}


}
