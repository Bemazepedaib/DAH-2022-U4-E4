import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor(private firestore: AngularFirestore) {
    this.getProducts().subscribe(res => {
      this.products = res
    })
  }

  public getProducts(): Observable<Product[]> {
    return this.firestore.collection('products').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Product
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  public getProduct(id: string): Observable<Product> {
    return this.firestore.collection('products').doc(id).snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as Product
        const id = a.payload.id;
        return { id, ...data };
      })
    )
  }

  public addProduct(p: Product): Observable<Product[]> {
    this.firestore.collection('products').add(p);
    return this.getProducts();
  }

}

