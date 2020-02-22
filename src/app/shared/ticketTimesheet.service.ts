import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';

import { TicketTimesheet } from '../model/ticketTimesheet.model';

@Injectable({
  providedIn: 'root'
})
export class TicketTimesheetService {

  readonly BaseURI = "https://localhost:44306/api";

  constructor(private http: HttpClient) { 
    

  }


  getTimesheet( timesheetID )
  {
    //return this.http.get<TicketTimesheet>(environment.apiBaseURI + '/Timesheet/' + timesheetID);     //Dettaglio  singolo ticket
    return this.http.get<TicketTimesheet>(this.BaseURI + '/Timesheet/' + timesheetID);     //Dettaglio  singolo ticket
  }

  /*
  getTimesheetList_raw()
  {
    return this.http.get(environment.apiBaseURI + '/Timesheet'); 
  }
*/

  getTimesheetList( ticketID ): Observable<TicketTimesheet[]>
  {

    //return this.http.get<Ticket[]>(environment.apiBaseURI + '/Ticket'); 
    //return this.http.get<TicketTimesheet[]>(environment.apiBaseURI + '/TicketTimesheet?TicketID=' + ticketID); 
    return this.http.get<TicketTimesheet[]>(this.BaseURI + '/TicketTimesheet?TicketID=' + ticketID); 
    
    
  }

  /*
  getTicketList(): Observable<Ticket[]>  {
    const params = new HttpParams()
      .set("page","1")
      .set("pageSize", "10");

      console.log("STEP1");
    return this.http.get<Ticket[]>(environment.apiBaseURI + '/ticket' , {params});
  }

  saveTicketState(timesheet: TicketTimesheet){

    console.log("SAVE!!!!");
    console.log(timesheet);

    // putBankAccount(formData){
    return this.http.put(environment.apiBaseURI + '/TicketTimesheet/' + timesheet, ticket.StatoTicket);
  }
*/
}
