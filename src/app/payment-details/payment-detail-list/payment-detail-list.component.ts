import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';   //NC
import { PaymentDetail } from 'src/app/model/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

 
@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {
  //displayedColumns: string[] = ['CardOwnerName', 'CardNumber','ExpirationDate'  ]; //NC
  //dataSourceArray = new MatTableDataSource();     //NC


  constructor(public service: PaymentDetailService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
    this.service.refreshList();
    
    //console.log(this.service.list );
    //this.dataSourceArray =  this.service.refreshList();    //NC

  }

  populateForm(objPaymentDetail: PaymentDetail){
    //this.service.formData=objPaymentDetail;
    //per evitare che i dati del form aggiornino direttamente la griglia prima del POST:
    //assegno un nuovo oggetto clonato da quello passato come parametro
    this.service.formData= Object.assign({}, objPaymentDetail);  
  }

  onDelete(PMid: BigInteger){
    if(confirm("Si conferma la cancellazione del record?")){
      this.service.deletePaymentDetail(PMid)
        .subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Record cancellato', 'Payment Detail Register');
      },
      err=> {
        console.log(err);
      });
    }
     
  }
}
