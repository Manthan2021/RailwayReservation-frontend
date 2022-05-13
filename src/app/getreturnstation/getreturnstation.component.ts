import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from '../station.service';

@Component({
  selector: 'app-getreturnstation',
  templateUrl: './getreturnstation.component.html',
  styleUrls: ['./getreturnstation.component.css']
})
export class GetreturnstationComponent implements OnInit {
  stationId:any;
  constructor(private sService:StationService,private router:Router) { }

  ngOnInit(): void {
  }
 
  getReturnStation(){
    console.log(this.stationId);
    this.sService.getReturnStation(this.stationId).subscribe((response)=> {
      console.log(response);
      if (response) {
        this.router.navigate(['displayreturnstation']);
        sessionStorage.setItem('stationId', this.stationId);
    
    }
    });


    // this.sService.getTicket(this.tid).subscribe((response) => {
    //   console.log(response);
    //   if (response) {
    //     this.router.navigate(['displayticket']);
    //     sessionStorage.setItem('tid', this.tid);
    
    // }
    // });

  }

}
  

