import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  //constructor() { }
  //constructor(private service: PaymentDetailService) { }                                  //costruttore con il ref al servizio
  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }     //costruttore con il ref al componente per le animazioni

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form?:NgForm){
    if(form!= null)
      form.resetForm();
      
    this.service.formData ={
      PMid :0,
      CardOwnerName:'',
      CardNumber:'',
      ExpirationDate: '',
      CVV:''
    }
  }

  onSubmit(form:NgForm){
    //form.value        //AS: oggetto in formato JSON contenente i campi del form

    console.log(this.service.formData.PMid);

    //if(form.value.PMid==0){
    if(this.service.formData.PMid ==0){
      this.InsertRecord(form);
    }
    else{
      this.UpdateRecord(form);
    }
  }

  InsertRecord(form:NgForm){
    //this.service.postPaymentDetail(form.value).subscribe(
    this.service.postPaymentDetail().subscribe(
      res => { 
        this.resetForm(form);
        this.toastr.success('Record inserito correttamente', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {console.log(err);  }
    )
  }
  UpdateRecord(form:NgForm){
    //this.service.putPaymentDetail(form.value).subscribe(
    this.service.putPaymentDetail().subscribe(
      res => { 
        this.resetForm(form);
        this.toastr.info('Record aggiornato correttamente', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {console.log(err);  }
    )
  }
}

