import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  public product: Product;
  constructor(private pS: ProductService, private aR: ActivatedRoute) {
    this.product = {
      photo: "",
      name: "",
      price: 0,
      quantity: 0
    }
   }

  ngOnInit() {
    this.aR.queryParams.subscribe(
      (params)=>{
        this.pS.getProduct(params.id).subscribe(res => {
          this.product = res
        })
      }
    );
  }

}
