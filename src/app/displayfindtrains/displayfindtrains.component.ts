import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Train } from '../train';
import { TrainService } from '../train.service';
import{station} from '../station'

@Component({
  selector: 'app-displayfindtrains',
  templateUrl: './displayfindtrains.component.html',
  styleUrls: ['./displayfindtrains.component.css']
})
export class DisplayfindtrainsComponent implements OnInit {
  tid1:any;
  tid2:any;
  train:any;
  tdate:any;
  t1:number=0;
  t2:number=0;
  constructor(private tService:TrainService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  
  }

  reloadData(){
  //this.train=new station();
  this.tid1=sessionStorage.getItem('tid1');
  this.tid2=sessionStorage.getItem('tid2');
  this.tdate=sessionStorage.getItem('tdate');
  // this.t1=+(this.tid1);
  // this.t2=+(this.tid2);


  this.tService.findTrains(this.tid1,this.tid2).subscribe(data => {
    console.log(data)
    this.train = data;
    console.log(this.train)
  }, error => console.log(error));
// console.log(this.t1);
// console.log(this.t2);
// console.log(this.tid1);
//  console.log(this.train);




  }
getTicket(id:number){
this.router.navigate(['addticket',id]);

}


}
