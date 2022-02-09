import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user = {
    name: 'Jone Doe',
    email: 'emailaddress@example.com',
    imgLink: 'https://www.w3schools.com/w3css/img_avatar3.png'
  };

  public sidebarData = [
    {
      title: 'Dashboard',
      icon: 'fa fa-dashboard',
      isActive: false
    },
    {
      title: 'Site Details',
      icon: 'fa fa-file',
      isActive: true
    },
    {
      title: 'Migrations',
      icon: 'fa fa-database',
      isActive: false
    },
    {
      title: 'Backups',
      icon: 'fa fa-window-restore',
      isActive: false
    },
    {
      title: 'Collaborations',
      icon: 'fa fa-handshake-o',
      isActive: false
    },
    {
      title: 'Support Tickets',
      icon: 'fa fa-support',
      isActive: false
    },
    {
      title: 'Open New Ticket',
      icon: 'fa fa-plus',
      isActive: false
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
