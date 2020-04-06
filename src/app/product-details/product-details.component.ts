import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// TODO: 非同期で読み込む場合を試したほうがいい
import { products } from "../products";

// サービスの読み込み（ストア的なやつ）
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  productId;
  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    console.log("ここは何で使うん？");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get("productId"));
      console.log(typeof params.get("productId"));
      console.log(parseInt(params.get("productId"), 10));
      this.productId = parseInt(params.get("productId"), 10);
      this.product = products[this.productId + 1];
    });
  }

  addToCart(product){
    // このチュートリアルのコード、これ引数で受け取る理由ある？
    //this.cartService.addToCart(this.product)
    this.cartService.addToCart(product);
    window.alert('added to cart.');
  }
}
