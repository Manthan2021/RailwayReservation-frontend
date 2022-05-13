import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { StationreturnService } from '../stationreturn.service';
import { station } from '../station';
import { Train } from '../train';



@Component({
  selector: 'app-addreturnstation',
  templateUrl: './addreturnstation.component.html',
  styleUrls: ['./addreturnstation.component.css']
})
export class AddreturnstationComponent implements OnInit {

  station :station=new station;
  submitted=false;

  public addnew : FormGroup|any

  constructor(private fb:FormBuilder,private sService:StationreturnService,private router:Router) { }

  ngOnInit(): void {
    this.addnew = this.fb.group({
      stop:[''],
      trains:this.fb.array([this.addtrains()])
      
      });
  }
  
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

    }

