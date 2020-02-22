import { Time } from '@angular/common';

export interface TicketTimesheet {
     id: number;
     ticketID: number;
     data: Date;
     andata_Start: Time;
     andata_End: Time;

     mattino_Start: Time;
     mattino_End: Time;
}

