import { Cart } from './../models/cart';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products:Product[];
  public cart:Cart;
  constructor(private pS: ProductService, private r:Router, private cS: CartService, private tC: ToastController) {
    this.pS.getProducts().subscribe(res => {
      this.products = res
    })
  }

  public async addProductToCart(p:Product){
    let toast = await this.tC.create({
        message: 'Producto agregado al carrito',
        duration: 1000
      });
    this.cS.addProductToCart(p);
    toast.present();
  }
  public addProduct(){
    this.r.navigate(['/add-product'])
  }
  public getProductById(id: string){
    this.r.navigate(['/view-product'],
      {
        queryParams: {id: id}
      }
    )
  }
  public getCart(){
      this.r.navigate(['/view-cart']);
  }
}

