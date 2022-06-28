
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { Observable } from 'rxjs';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-printticket',
  templateUrl: './printticket.component.html',
  styleUrls: ['./printticket.component.css']
})
export class PrintticketComponent implements OnInit {

  tid:any
ticket:Observable<Ticket[]>|undefined;
  constructor(private tService:TicketService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
    console.log("hii");
 
  }
  reloadData(){
  this.tid = sessionStorage.getItem('tid');
this.ticket=this.tService.getTicket(this.tid);

}


}
