import { ActivatedRoute } from '@angular/router';
import { CartService } from './../services/cart.service';
import { Cart } from './../models/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {

  public cart:Cart;
  constructor(private cs:CartService, private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.cart=this.cs.getCart();
  }

  public deleteCartProduct(i){
    this.cs.removeFromCart(i);
  }

}
