import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  constructor(private cService:ConsumerService,private router:Router ) { }

  ngOnInit(): void {
  }
newConsumer() :void{
  this.submitted=false;
this.consumer=new Consumer();
}

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
