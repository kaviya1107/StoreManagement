import { Component } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent {
  item: { [key: number]: number } = {
    5001: 20,
    5002: 25,
    5003: 30,
    5004: 40,
    5005: 50
  };

  itemid: number | null = null;
  Quantity: number | null = null;
  totalbill = 0;
  cart: { itemid: number, Quantity: number }[] = [];
  Add: boolean = true;


  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  validUsername: string = 'admin';
  validPassword: string = '1234';
  currentDateTime: string = '';

 

  // Login
  login() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.isLoggedIn = true;
    } else {
      alert('Invalid Credentials');
    }
  }

  // Logout
  logout() {
    this.isLoggedIn = false;
    this.cart = [];
    this.totalbill = 0;
    alert('Logged out successfully');
  }

  // Add Items to Cart
  additem() {
    if (this.itemid && this.Quantity && this.item[this.itemid]) {
      this.cart.push({ itemid: this.itemid, Quantity: this.Quantity });
      this.totalbill += this.item[this.itemid] * this.Quantity;
      this.itemid = null;
      this.Quantity = null;
    } else {
      alert('Invalid Item');
    }
  }

  // Clear Cart
  clearCart() {
    this.cart = [];
    this.totalbill = 0;
    alert('Cart cleared successfully');
  }

  // Finish Billing
  finishbilling() {
    this.Add = false;
  }

  // Reset Billing
  resetbill() {
    this.Add = true;
    this.cart = [];
    this.totalbill = 0;
  }

  // Print Receipt
  printReceipt() {
    let receipt = 'Receipt:\n';
    this.cart.forEach(item => {
      receipt += `Item: ${item.itemid}, Quantity: ${item.Quantity}\n`;
    });
    receipt += `Total Bill: ${this.totalbill}`;
    alert(receipt);
    window.print();
  }
  pay(){
    
  }
}
