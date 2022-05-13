import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-displaystation',
  templateUrl: './displaystation.component.html',
  styleUrls: ['./displaystation.component.css']
})
export class DisplaystationComponent implements OnInit {

  sid:any;
  station:Observable<station[]>|undefined;
  constructor(private sService:StationService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.sid = sessionStorage.getItem('stationId');
  this.station=this.sService.getStation(this.sid);
  
  }

}
