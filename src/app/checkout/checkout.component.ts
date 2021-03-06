import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: '/assets/img/1.jpg',
      price: 5.99,
      quantity: 2
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: '/assets/img/2.jpg',
      price: 9.99,
      quantity: 4
    }
  ]
  numberItems: number = 3;
  constructor() { }

  ngOnInit(): void {
    let numberItems = 0;
    let subTotal = 0;
    for (const product of this.products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItems = numberItems;
  }
  onRemoveProduct = (productId: number): void => {
    const index =  this.products.findIndex(product => product.id === productId);
    this.products.splice(index, 1);
  }

}
