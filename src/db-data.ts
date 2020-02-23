
export const TICKETS: any= [
{
    id: 1,
    n_Ticket: "TK1900001",
    iconURL: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    TipoTicket: "A",
    statoTicket: 70,
    badge: "666",
    clienteRagsoc: "Parpas S.p.A.",
    DtPrev: "01/01/2020"
},
{
    id: 2,
    n_Ticket: "TK1900003",
    TipoTicket: "I",
    statoTicket: 70,
    badge: "666",
    clienteRagsoc: "OMV S.p.A.",
    DtPrev: "21/02/2020"
},
{
    id: 3,
    n_Ticket: "TK1900004",
    iconURL: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
    TipoTicket: "A",
    statoTicket: 70,
    badge: "123",
    clienteRagsoc: "Breton",
    DtPrev: "01/03/2020"
},
{
    id: 4,
    n_Ticket: "TK1900005",
    iconURL: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    TipoTicket: "A",
    statoTicket: 80,
    badge: "234",
    clienteRagsoc: "FPT S.p.A.",
    DtPrev: "01/03/2020"
},
{
    id: 5,
    n_Ticket: "TK1900006",
    iconURL: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    TipoTicket: "I",
    statoTicket: 90,
    badge: "235",
    clienteRagsoc: "Malvestio S.r.l.",
    DtPrev: "01/01/2020"
}
]

export function findTicketById(TicketId:number) {
    return TICKETS.find(ticket => ticket.id === TicketId);
}

export function findTicketByN_Ticket(n_ticket:string) {
    return TICKETS.find(ticket => ticket.n_Ticket === n_ticket);
}

