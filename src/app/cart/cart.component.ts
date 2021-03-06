import { Component, OnInit } from "@angular/core";

import { FormBuilder } from '@angular/forms';

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    // フォームの要素を定義、関連付けはここ
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }


  onSubmit(customerData) {
    // エラー処理とかはこのあたりかな？

    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
