import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { BankService } from '../shared/bank.service';
import { BankAccountService } from '../shared/bank-account.service';


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: []
})
export class BankAccountComponent implements OnInit {

  bankAccountForms: FormArray = this.fb.array([]);
  bankList = [];
  notification = null;

  constructor(private fb: FormBuilder, private bankService: BankService, private accountService: BankAccountService) { }

  ngOnInit() {

    this.bankService.getBankList()
      .subscribe(res => this.bankList = res as []);

    this.accountService.getBankAccountList().subscribe(
      res => { 
        if (res==[])
          this.addBankAccountForm();
        else{
          // form array per contenere i dati restituiti dalla tabella bankAccount 
          (res as []).forEach((bankAccount:any)=> {
            this.bankAccountForms.push(this.fb.group({
              bankAccountID : [bankAccount.BankAccountID],
              accountNumber :[bankAccount.AccountNumber, Validators.required],
              accountHolder :[bankAccount.AccountHolder, Validators.required],
              bankID : [bankAccount.BankID, Validators.min(1)],
              //bankID : [bankAccount.bankID  ],
              IFSC : [bankAccount.IFSC, Validators.required]
            }));
          });
        }
      }
    );
    //console.log(this.bankList);
  }

  addBankAccountForm(){
    this.bankAccountForms.push(this.fb.group({
      bankAccountID : [0],
      accountNumber : ['', Validators.required],
      accountHolder : ['', Validators.required],
      bankID : [0, Validators.min(1)],
      IFSC : ['', Validators.required]
    }))
  }

  recordSubmit(fg:FormGroup)  {
  //console.log("DEBUG - " + fg.value);
    if(fg.value.bankAccountID == 0){
      //Insert
      this.accountService.postBankAccount(fg.value).subscribe(
        (res: any) => {
          fg.patchValue ({ bankAccountID: res.bankAccountID });     ///?????
          this.showNotification('insert');
        });
    }
    else{
      //Update
      this.accountService.putBankAccount( fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        
        });
    }
  }

  onDelete(bankAccountID, i) {
    if (bankAccountID == 0)
      this.bankAccountForms.removeAt(i);
    else if (confirm('Si conferma la cancellazione del record ?'))
      this.accountService.deleteBankAccount(bankAccountID).subscribe(
        res => {
          this.bankAccountForms.removeAt(i);
          this.showNotification('delete');
        });
  }

  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'Inserito!' };
        break;
      case 'update':
        this.notification = { class: 'text-primary', message: 'Aggiornato!' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'Cancellato!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }

}
