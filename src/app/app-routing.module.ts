import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';

import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { BankAccountComponent } from './bank-account/bank-account.component';

// AS: Default path
//const routes: Routes = [];

//AS: Login

const routes: Routes = [
  //{ path:'', component:  PaymentDetailsComponent},

  { path:'home', component: HomeComponent, canActivate:[AuthGuard]  },
  { path:'ticket-card', component: TicketCardComponent, canActivate:[AuthGuard]},
  { path:'ticket-details/:id', component: TicketDetailsComponent, canActivate:[AuthGuard]},

  { path:'payments', component: PaymentDetailsComponent, canActivate:[AuthGuard]},
  { path:'bank', component: BankAccountComponent, canActivate:[AuthGuard]},
  
  //{ path:'registration', component: RegistrationComponent}

  { path:'' , redirectTo: 'user/login', pathMatch: 'full' },
  { path:'user', component: UserComponent, 
    children:[
    {path:'registration', component: RegistrationComponent },
    {path:'login', component: LoginComponent }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents= {PaymentDetailsComponent,RegistrationComponent};

