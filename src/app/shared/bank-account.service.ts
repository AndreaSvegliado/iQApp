import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  readonly rootURL = "https://localhost:44306/api";
  constructor(private http:HttpClient) {

  }
  
  //Insert
  postBankAccount(formData){
    //return this.http.post(environment.apiBaseURI + '/BankAccount', formData);
    return this.http.post(this.rootURL + '/BankAccount', formData);
  }
  //Update
  putBankAccount(formData){
    //console.log("ANDREA "  + formData.bankAccountID );
    //return this.http.put(environment.apiBaseURI + '/BankAccount/' + formData.bankAccountID, formData);
    return this.http.put(this.rootURL + '/BankAccount/' + formData.bankAccountID, formData);
  }
  //Delete
  deleteBankAccount(id){
    //return this.http.delete(environment.apiBaseURI + '/BankAccount/' + id);
    return this.http.delete(this.rootURL + '/BankAccount/' + id);
  }

  getBankAccountList(){
    //return this.http.get(environment.apiBaseURI + '/BankAccount');
    return this.http.get(this.rootURL + '/BankAccount');
  }

  
}
