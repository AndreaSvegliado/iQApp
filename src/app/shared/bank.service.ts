import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  //spostata su environment.ts
  readonly BaseURI = "https://localhost:44306/api";

  getBankList()
  {
    //return this.http.get(environment.apiBaseURI + '/Bank');
    return this.http.get(this.BaseURI + '/Bank');
  }

}
