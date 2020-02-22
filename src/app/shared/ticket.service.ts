import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Ticket } from '../model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  //spostata su environment.ts
  //readonly BaseURI = "https://localhost:44306/api";

  constructor(private http: HttpClient) { 

  }


  getTicketDetail(ticketID )
  {
    return this.http.get<Ticket>(environment.apiBaseURI + '/Ticket/' + ticketID);     //Dettaglio  singolo ticket
  }

  getTicketList_raw()
  {
    return this.http.get(environment.apiBaseURI + '/Ticket'); 
  }

  getTicketList(): Observable<Ticket[]>
  {
    //return this.http.get<Ticket[]>(environment.apiBaseURI + '/Ticket'); 
    return this.http.get<Ticket[]>(environment.apiBaseURI + '/Ticket?badge=666');     //QUI: filtro per utente loggato!!!!
  }

  /*
  getTicketList(): Observable<Ticket[]>  {
    const params = new HttpParams()
      .set("page","1")
      .set("pageSize", "10");

      console.log("STEP1");
    return this.http.get<Ticket[]>(environment.apiBaseURI + '/ticket' , {params});
  }
*/
  saveTicketState(ticket: Ticket){

    console.log("SAVE!!!!");
    console.log(ticket);

    // putBankAccount(formData){
    return this.http.put(environment.apiBaseURI + '/Ticket/' + ticket, ticket.StatoTicket);
  }

}
