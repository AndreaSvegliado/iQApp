import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

import { Ticket } from '../model/ticket.model';
import { TicketService } from '../shared/ticket.service';
import { TicketTimesheetService } from '../shared/ticketTimesheet.service';
import { TicketTimesheet } from '../model/ticketTimesheet.model';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})

export class TicketDetailsComponent implements OnInit {
  //ticket:any;
  ticket:Ticket;

  timesheetForms: FormArray = this.fb.array([]);

  constructor(private route: ActivatedRoute, private router : Router, private fb: FormBuilder, private ticketService: TicketService, private timesheetService: TicketTimesheetService ) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];

    this.ticketService.getTicketDetail(id).subscribe(t =>{  
      this.ticket = t;
    })
    
    this.timesheetService.getTimesheetList(id).subscribe(
      res =>{
        if (res==[]){
          this.addTimesheetForm();
        }
        else{
          (res as []).forEach((timesheet:any)=> {
            this.timesheetForms.push(this.fb.group({
              id : [timesheet.ID],
              ticketID :[timesheet.TicketID],
              data :[timesheet.Data],
              mattino_Start :[timesheet.Mattino_Start],
              //ticketData :[timesheet.Data, Validators.required]
              //Mattino_Start :[timesheet.mattino_Start],
              //Mattino_End :[timesheet.mattino_End]              
            }));

          });
        }
        console.log(res);
      }
    )
  }


  addTimesheetForm(){
    this.timesheetForms.push(this.fb.group({
      ID : [0],
      TicketID : ['', Validators.required],
      Data : ['', Validators.required],
      Andata_Start: ['', Validators.required],
      Andata_End: ['', Validators.required]
    }))
  }

  BackToHome(){
    this.router.navigate(['/home']);

    // per tornare alla home l'ID del ticket corrente (ed eventualemtne evidenziarlo)
    //let selectID = this.ticket.ID ? this.ticket.ID:null;
    //this.router.navigate(['/home', {id:selectID}]);      

  }

}
