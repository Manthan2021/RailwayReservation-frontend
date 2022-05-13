import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-displayreturntrain',
  templateUrl: './displayreturntrain.component.html',
  styleUrls: ['./displayreturntrain.component.css']
})
export class DisplayreturntrainComponent implements OnInit {

  trainId:any;
  train:Train|any;
  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
    
   this.reloadData();

  }

reloadData(){
  this.train=new Train();
  this.trainId = sessionStorage.getItem('trainId');
  this.train=this.tService.getReturnTrain(this.trainId).subscribe(data => {
    console.log(data)
    this.train = data;
  }, error => console.log(error));

}


}
