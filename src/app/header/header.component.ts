import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout(){
    sessionStorage.removeItem('ademail');
  }
 
}
