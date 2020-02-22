
import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../shared/user.service';
import { TicketService } from '../shared/ticket.service';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket.model';
// import { TICKETS } from '../../db-data'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  startDate = new Date(Date());
  userDetails;
  
  //ticketList=TICKETS;         //vecchia versione con db-data-ts
  tickets;
  //ticketList$ : Observable<Ticket[]>;

  constructor(private router: Router, private uService: UserService, private tService: TicketService) { }

  ngOnInit() {
    
    /* spostato su app.component
    this.uService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
    */
    this.tService.getTicketList()
      .subscribe(
        res=>   this.tickets = res as Ticket[]
      );    

      //AS: ERRORE NON FUNZIONA!!!!
      //this.ticketList$ = this.tService.getTicketList();
 
  }
  /*
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  */

 


}

