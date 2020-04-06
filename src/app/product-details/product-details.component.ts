import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  productId;
  product;

  constructor(private route: ActivatedRoute) {
    console.log("ここは何で使うん？");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log( params.get("productId") );
      console.log( typeof params.get("productId") );
      console.log( parseInt( params.get("productId"), 10 ));
      this.productId = parseInt( params.get("productId"), 10 );
      this.product = products[this.productId+1];
    });
  }
}
