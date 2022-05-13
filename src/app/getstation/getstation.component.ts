import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationService } from '../station.service';

@Component({
  selector: 'app-getstation',
  templateUrl: './getstation.component.html',
  styleUrls: ['./getstation.component.css']
})
export class GetstationComponent implements OnInit {

  stationId:any;
  constructor(private sService:StationService,private router:Router) { }

  ngOnInit(): void {
  }
 
  getTheStation(){
    console.log(this.stationId);
    this.sService.getStation(this.stationId).subscribe((response)=> {
      console.log(response);
      if (response) {
        this.router.navigate(['displaystation']);
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
