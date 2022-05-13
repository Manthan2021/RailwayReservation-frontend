import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Train } from '../train';
import { TrainService } from '../train.service';


@Component({
  selector: 'app-displaytrain',
  templateUrl: './displaytrain.component.html',
  styleUrls: ['./displaytrain.component.css']
})
export class DisplaytrainComponent implements OnInit {

  trainId:any;
  train:Train|any;
  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
    
   this.reloadData();

  }

reloadData(){
  this.train=new Train();
  this.trainId = sessionStorage.getItem('trainId');
  this.train=this.tService.getTrain(this.trainId).subscribe(data => {
    console.log(data)
    this.train = data;
  }, error => console.log(error));

}


}
