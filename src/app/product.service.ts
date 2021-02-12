import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() {
    this.products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
      new Product(4, 'Computer', 100),
      new Product(5, 'Laptop', 100),
      new Product(6, 'Printer', 100),
    ]
  }

  public getProducts(): Observable<Product[]> {
      return of(this.products);
  }
  public getProduct(id): Observable<Product> {
    var product = this.products.find(product => product.productID == id);
    return of(product);
  }
}
