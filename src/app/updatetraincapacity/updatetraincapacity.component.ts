import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import { Observable } from 'rxjs';
import { Train } from '../train';



@Component({
  selector: 'app-updatetraincapacity',
  templateUrl: './updatetraincapacity.component.html',
  styleUrls: ['./updatetraincapacity.component.css']
})
export class UpdatetraincapacityComponent implements OnInit {

  trainId:any=0;
  train:Train|any;
  submitted=false;



  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
  }

  updateTrain(){
    this.tService.updateTrain(this.trainId, this.train)
    .subscribe(data => console.log(data),error => console.log(error));
  this.train = new Train();
  this.gotoList();
  }

  onSubmit() {
    this.updateTrain();
  }

  gotoList() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  // console.log(this.trainId);
  // this.tService.getReturnTrain(this.trainId).subscribe((response) => {
  //   console.log(response);


}
