import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';                        //AS: reference per chiamata a WS
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; //AS: reference per animazioni
import { ToastrModule} from 'ngx-toastr';                                      //AS: reference per animazioni
//import { MaterialModule} from 'src/app/material/material.module';                    //AS: reference per Material
import { MaterialModule} from './material/material.module';                    //AS: reference per Material

import { AppRoutingModule } from './app-routing.module';
//import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component'
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';


import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketService } from './shared/ticket.service';

import { PaymentDetailService } from './shared/payment-detail.service';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';

import { BankAccountService } from './shared/bank-account.service';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';


@NgModule({
  declarations: [
    AppComponent,
    //routingComponents
    HomeComponent,
    
    UserComponent,
    RegistrationComponent,
    LoginComponent,

    TicketCardComponent,
    TicketDetailsComponent,

    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,

    BankAccountComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,        
    MaterialModule,             //AS: reference a Material
    HttpClientModule,           //AS: reference per chiamata a WS
    BrowserAnimationsModule,    //AS: reference per animazioni
    ToastrModule.forRoot({      //AS: reference per animazioni (ATTENZIONE: è una funzione (???))
      progressBar:true
    })
  ],

  //AS: Injection per fare comunicare tra loro moduli diversi
  //providers: [],
  //providers:[UserService, PaymentDetailService, { 
    providers:[UserService, TicketService, PaymentDetailService, BankAccountService,  { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
