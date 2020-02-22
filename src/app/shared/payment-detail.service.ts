import { PaymentDetail } from '../model/payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';        //AS: reference per chiamata a WS
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  
  //readonly rootURL = "https://localhost:44306/api";
  formData:PaymentDetail
  list: PaymentDetail[];

  //constructor() { }
  constructor(private http:HttpClient) { }

  //Insert
  // postPaymentDetail(formData: PaymentDetail){
  //   return this.http.post(this.rootURL + '/PaymentDetail',formData)      //AS:chiamata al WS
  // }
  //Update
  // putPaymentDetail(formData: PaymentDetail){
  //   return this.http.put(this.rootURL + '/PaymentDetail' + formData.PMid,formData)      //AS:chiamata al WS
  // }
  //AS: questa versione utilizza direttamente i parametri del servizio (this. ...)
  postPaymentDetail(){
    //return this.http.post(this.rootURL + '/PaymentDetail',this.formData)  
    return this.http.post( environment.apiBaseURI + '/PaymentDetail',this.formData)  

  }  
  
  putPaymentDetail(){
    return this.http.put( environment.apiBaseURI + '/PaymentDetail/' + this.formData.PMid,this.formData)    
  }

  deletePaymentDetail(  id  ){
    return this.http.delete(  environment.apiBaseURI + '/PaymentDetail/' + id ) ;
  }

  refreshList(){
    //AS: niente return ??
     this.http.get(  environment.apiBaseURI + '/PaymentDetail')
    .toPromise()            //AS ???
    .then(res => this.list = res as PaymentDetail[] );
  }
  
}
