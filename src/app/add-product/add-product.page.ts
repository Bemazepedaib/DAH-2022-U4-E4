import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  prodname: string;
  prodprice: number;
  prodphoto: string;

  constructor(private ps: ProductService, private tc: ToastController) { }

  ngOnInit() {
  }

  public async addProduct() {
    let toast = await this.tc.create({
      message: 'Producto agregado correctamente',
      duration: 1000
    });
    let p = {
      name: this.prodname,
      photo: this.prodphoto,
      price: this.prodprice,
      quantity: 0
    }
    this.ps.addProduct(p)
    this.prodname = " ";
    this.prodprice = 0;
    this.prodphoto = " ";
    toast.present();
  }

}
