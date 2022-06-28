import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConsumerService } from '../consumer.service';
import { Consumer } from '../consumer';

@Component({
  selector: 'app-registerconsumer',
  templateUrl: './registerconsumer.component.html',
  styleUrls: ['./registerconsumer.component.css']
})
export class RegisterconsumerComponent implements OnInit {

  consumer: Consumer=new Consumer;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private cService:ConsumerService,private router:Router ) { }
  RegisterForm: FormGroup | any;

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({

      fname:['', [Validators.required, Validators.email]],
      lname:['', [Validators.required]],
      email: ['', [Validators.required]],
      mobilenumber:['', [Validators.required]],
      password:['', [Validators.required]],

    });
  }
newConsumer() :void{
  this.submitted=false;
this.consumer=new Consumer();
}

get f() { return this.RegisterForm.controls; }

save(){
this.cService.newConsumer(this.consumer).
subscribe(data => console.log(data), error => console.log(error));
this.consumer=new Consumer();
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
