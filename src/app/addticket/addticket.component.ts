import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css']
})
export class AddticketComponent implements OnInit {


  public addnew:FormGroup|any
  constructor(private fb:FormBuilder,private tService:TicketService,private router:Router) { }

  ngOnInit(): void {
  this.addnew=this.fb.group({
    train_id:['', Validators.required],
    fromst:['', Validators.required],
    tost:['', Validators.required],
    deptdate:['', Validators.required],
    arrdate:['', Validators.required],
    deptTime:['', Validators.required],
    arrTime:['', Validators.required],
    passenger:this.fb.array([this.addpassenger()])
  });
}

get formArr(){
  return this.addnew.get('passenger') as FormArray
}

get f(){
  return this.addnew.controls;
}

addpassenger(){
return this.fb.group({
  pname:[''],
  age:['']
});
}

addNewRow() {
  this.formArr.push(this.addpassenger());
}
deleteRow(index: number) {
  this.formArr.removeAt(index);
}

onSubmit(data:any) {
  console.warn(data)
  this.tService.newTicket(data).subscribe((result)=>{
    console.warn()
    this.router.navigate(['/home'])
  })
  }


  
  }


