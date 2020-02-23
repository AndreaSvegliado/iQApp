import { Component, OnInit,Input, Output} from '@angular/core';

import {
  AfterContentInit,
  AfterViewInit,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  QueryList, TemplateRef,
  ViewChild
} from '@angular/core';

import { TicketService } from '../shared/ticket.service';
import { Ticket } from '../model/ticket.model';

//import {TICKETS} from '../../db-data';
//import { tick } from '@angular/core/testing';


@Component({
  selector: 'ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  localTicket : Ticket;

  @Input()            
    ticket : Ticket;
  
  @Input()
    ticketIndex: number;


  constructor(private ticketService: TicketService) { }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {

  }

  ngOnInit() {

    //console.log(this.ticket.clienteRagsoc);

    //this.localTicket.n_Ticket="TK19TEST";
    //this.myTicket.badge="99999";
    //this.Ragsoc="TEST ANDREA";


    //this.bankService.getBankList()
    //  .subscribe(res => this.bankList = res as []);

  }

  onOpenTicketClick(){
    console.log("ticket component - clicked " );
    //console.log(this.ticket);

    this.ticket.StatoTicket = "80";
    console.log(this.ticket);
    
    this.ticketService.saveTicketState(this.ticket);

    //console.log(this.ticket);


  }

  ticketClasses(){
      return  {
        'stato70': this.ticket.StatoTicket=="70",
        'stato80': this.ticket.StatoTicket=="80",
        'stato90': this.ticket.StatoTicket=="90",
        'ticket-card': true
      }
  }
  ticketStyles(){
    return{
      //'text-decoration':  'underline'

    };
  }



    //AS: metodo dell'evento (click)="onH1Click()"
    /*
    onH1Click(){
      alert('Hello World');
    }
    onKeyUp(newValue: string) {
      this.demoTicket.n_ticket = newValue;
    }
    */
}
