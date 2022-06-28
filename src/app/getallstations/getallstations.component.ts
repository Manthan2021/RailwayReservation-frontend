import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { StationService } from '../station.service';
import { station } from '../station';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getallstations',
  templateUrl: './getallstations.component.html',
  styleUrls: ['./getallstations.component.css']
})
export class GetallstationsComponent implements OnInit {

  stations:Observable<station[]>|any;
  constructor(private sService:StationService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
this.stations=this.sService.getAllStations();
  }

}
