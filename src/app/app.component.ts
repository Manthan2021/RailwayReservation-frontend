import { Component } from '@angular/core';
import { AdminserviceService } from './adminservice.service';
import { ConsumerService } from './consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Railway-Reservation';

  constructor(public cService:ConsumerService,public aService:AdminserviceService){}
}
