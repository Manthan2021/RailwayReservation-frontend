import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { station } from '../station';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-getticket',
  templateUrl: './getticket.component.html',
  styleUrls: ['./getticket.component.css']
})
export class GetticketComponent implements OnInit {

tid:any;
  constructor(private tService:TicketService,private router:Router) { }

  ngOnInit(): void {
    
  }

  
gettheTicket(){

console.log(this.tid);
this.tService.getTicket(this.tid).subscribe((response) => {
  console.log(response);
  if (response) {
    sessionStorage.setItem('tid', this.tid);
    this.router.navigate(['printticket']);
   

}
});

}
}