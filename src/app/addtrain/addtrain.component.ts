import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TrainService } from '../train.service';
import { Train } from '../train';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

  train:Train=new Train;
  submitted=false;

  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
  }

  newTrain():void{
  this.submitted=false;
  this.train=new Train();
  }

  save(){
 this.tService.addtrain(this.train).
 subscribe(data => console.log(data), error => console.log(error));
this.train=new Train();
this.gotoList();
 
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });
  }
  

}
