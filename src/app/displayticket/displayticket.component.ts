import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-displayticket',
  templateUrl: './displayticket.component.html',
  styleUrls: ['./displayticket.component.css']
})
export class DisplayticketComponent implements OnInit {

  tid:any
ticket:Observable<Ticket[]>|undefined;
  constructor(private tService:TicketService,private router:Router) { }




  ngOnInit(): void {
    this.reloadData();
  
//  this.ticket= this.tService.getTicket(this.tid).subscribe((response) => {
//     console.log(response);
//   });
}

reloadData(){
  this.tid = sessionStorage.getItem('ticketid');
this.ticket=this.tService.getTicket(this.tid);

}

}
