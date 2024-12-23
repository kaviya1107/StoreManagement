import { Component } from '@angular/core';
import { RetailComponent } from '../retail/retail.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
 btn(){
  alert("Payment Successfull")
 }
 
}
