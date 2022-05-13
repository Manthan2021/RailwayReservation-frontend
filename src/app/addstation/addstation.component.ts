import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { StationService } from '../station.service';
import { station } from '../station';
import { Train } from '../train';

@Component({
  selector: 'app-addstation',
  templateUrl: './addstation.component.html',
  styleUrls: ['./addstation.component.css']
})
export class AddstationComponent implements OnInit {

   station :station=new station;
  submitted=false;

  public addnew : FormGroup|any

  constructor(private fb:FormBuilder,private sService:StationService,private router:Router) { }

  ngOnInit(): void {
this.addnew = this.fb.group({
stop:[''],
trains:this.fb.array([this.addtrains()])

});
  }

// newStation(){
// this.submitted=false;
// this.station=new station();
// }

// save(){
//   this.sService.newStation(this.station).
//   subscribe(data => console.log(data),error => console.log(error));
//   this.station=new station();
//   // this.gotoList();
// }
get formArr(){
  return this.addnew.get('trains') as FormArray;
}

get f(){
  return this.addnew.controls;
}

addtrains(){
return this.fb.group({
  trainId:[''],
  trainName:[''],
  capacity:[''],
  type:['']

});
}

addNewRow() {
  this.formArr.push(this.addtrains());
}
deleteRow(index: number) {
  this.formArr.removeAt(index);
}



onSubmit(data:any) {
  console.warn(data)
  this.sService.newStation(data).subscribe((result)=>{
    console.warn()
    this.router.navigate(['/home'])
  })
  }
  // this.submitted = true;
  // this.save();    
}
// gotoList() {
//   this.router.navigate(['/home'])
// }

 







