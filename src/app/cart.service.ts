import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {
    console.log("これ何に使うの？");
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // これはawaitとかになってるの？謎
  // https://angular.jp/guide/http#httpclient
  // サービスで非同期通信するんだ？
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
