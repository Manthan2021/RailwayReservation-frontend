import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-gettrain',
  templateUrl: './gettrain.component.html',
  styleUrls: ['./gettrain.component.css']
})
export class GettrainComponent implements OnInit {

  trainId:any
  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
  }

getthetrain(){
  console.log(this.trainId);
  this.tService.getTrain(this.trainId).subscribe((response) => {
    console.log(response);
    if (response) {
      this.router.navigate(['displaytrain']);
      sessionStorage.setItem('trainId', this.trainId);
  
  }
  });



}


}
