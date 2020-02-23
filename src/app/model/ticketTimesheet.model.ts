import { Time } from '@angular/common';

export interface TicketTimesheet {
     ID: number;
     TicketID: number;
     Data: Date;
     Andata_Start: Time;
     Andata_End: Time;

     Mattino_Start: Time;
     Mattino_End: Time;
}

