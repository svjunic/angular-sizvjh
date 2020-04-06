import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor() {
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
}
