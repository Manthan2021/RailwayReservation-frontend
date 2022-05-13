import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-getreturntrain',
  templateUrl: './getreturntrain.component.html',
  styleUrls: ['./getreturntrain.component.css']
})
export class GetreturntrainComponent implements OnInit {

  trainId:any
  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
  }

getthetrain(){
  console.log(this.trainId);
  this.tService.getReturnTrain(this.trainId).subscribe((response) => {
    console.log(response);
    if (response) {
      this.router.navigate(['displayreturntrain']);
      sessionStorage.setItem('trainId', this.trainId);
  
  }
  });



}
}
