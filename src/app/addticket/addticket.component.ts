import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Train } from '../train';
import { TrainService } from '../train.service';
import { Ticket } from '../ticket';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css'],
  providers: [DatePipe]
})
export class AddticketComponent implements OnInit {


  public addnew:FormGroup|any
  train:Train|any;
  trainId:number=0;
  fromSt:any;
  toSt:any;
  deptDate1:Date|any;
  //depDate:any;
  x:any;
  t:any;
  count:number=1;
  newcapacity:number=0;
  xid:number=0;
  m:any;
  deptDate: string |any;
  


  constructor(private fb:FormBuilder,private tService:TicketService,private trService:TrainService,private router:Router,private route:ActivatedRoute,private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.trainId = this.route.snapshot.params['id'];
    this.fromSt=sessionStorage.getItem('t1');
    this.toSt=sessionStorage.getItem('t2');
    this.deptDate1=sessionStorage.getItem('TDate');
    this.deptDate=this.datepipe.transform(this.deptDate1,'yyyy-MM-dd');
    this.x="0";
    console.log(this.fromSt);
  
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
  this.count=this.count+1;
}
deleteRow(index: number) {
  this.count=this.count-1;
  this.formArr.removeAt(index); 
}

// onSubmit(data:any) {
//   console.warn(data)
//   this.tService.newTicket(data).subscribe((result)=>{
//     console.warn()
//     this.router.navigate(['/home'])
//   })
//   }


onSubmit(data:any) {
  console.warn(data)
  
data.train_id=this.trainId;
data.fromst=this.fromSt;
data.tost=this.toSt;
data.deptdate=this.deptDate;
data.arrdate=this.x;
data.deptTime=this.x;
data.arrTime=this.x;

 this.tService.newTicket(data).subscribe((result)=>{
    console.warn()
    console.log(result);
    this.m=result;   
    console.log(this.m.tid,"hello");
    sessionStorage.setItem('ticketid',this.m.tid);
    this.t=data;
 //console.log(this.m,"hiii");
 //console.log(data);
  
  // console.log(sessionStorage.getItem('ticket1'),"got it");
  this.train=new Train();
  this.train=this.trService.getTrain(data.train_id).subscribe(data => {
    console.log(data)
    this.train = data;
    this.newcapacity=data.capacity-this.count;
    this.trainId=data.trainId;

this.train.capacity=this.newcapacity;
// console.log(this.newcapacity);
// console.log(data.trainId);
// console.log(this.train);

this.trService.updateTrain(this.trainId,this.train).
subscribe(data => console.log(data),error => console.log(error));
this.train=new Train();


// this.pService.updateProduct(this.id, this.product)
// .subscribe(data => console.log(data),error => console.log(error));
// this.product = new Product();


this.gotoList();
  console.log(this.count);
  


  });
  })
 
 
  }

  gotoList() {
    console.log(this.xid);
    this.router.navigate(['displayticket']);
    //this.router.navigate(['/printticket']);
    
    // .then(() => {
    //   window.location.reload();
    // });
  }

  }


