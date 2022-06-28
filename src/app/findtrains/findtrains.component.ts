import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import { FormsModule,FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-findtrains',
  templateUrl: './findtrains.component.html',
  styleUrls: ['./findtrains.component.css'],
  })
export class FindtrainsComponent implements OnInit {
 t1:any;
 t2:any;
 tid1:any;
 tid2:any;

TDate: Date=new Date();
  searchForm: FormGroup|any;
  constructor(private tService:TrainService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  
 this.searchForm=this.formBuilder.group({
  TDate:new Date(),
   t1:[''],
   t2:['']
 });
 
  }

getTrainId(){
console.log(this.t1);

sessionStorage.setItem('t1',this.t1);
  this.tid1=this.tService.getTrainId(this.t1).subscribe((response) => {
  console.log(response);
  if (response) {
    sessionStorage.setItem('tid1',response);
    }
 console.log(this.t2);
 sessionStorage.setItem('t2',this.t2);
  this.tid2=this.tService.getTrainId(this.t2).subscribe((response) => {
    console.log(response);
    if (response) {
     this.router.navigate(['displayfindtrains']);
      sessionStorage.setItem('tid2',response);
    sessionStorage.setItem('TDate',this.TDate.toString());
      console.log(this.TDate);
  }

    });

  });
// console.log(this.tid1,"hii");
// console.log(this.tid2,"hello");

 

}

}
