import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './../models/product';
import { Cart } from './../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart;
  constructor(private ps: ProductService) {
    this.cart = { products: [], total: 0 };
  }
  public getCart() {
    return this.cart;
  }
  public removeFromCart(p: number) {
    this.cart.products.splice(p, 1);
    this.total();
  }
  public total() {
    let i = 0;
    this.cart.total = 0;
    while (i < this.cart.products.length) {
      this.cart.total += (this.cart.products[i].price * this.cart.products[i].quantity);
      i++;
    }
  }
  public addProductToCart(p: Product) {
    console.log(this.cart);
    if ((this.cart.products.findIndex(
      (prod) => prod.id === p.id
    )) === -1) {
      this.cart.products.push(p);
      console.log(this.cart);
    }
    let pro = this.cart.products.find(
      (prod) => prod.id === p.id
    );
    pro.quantity++;
    this.total();
    //this.cart.total+=p.price;
  }

}

