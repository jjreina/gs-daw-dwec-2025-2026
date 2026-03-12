import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  private readonly url: string = 'https://fakestoreapi.com/products';

  public readonly getAllProducts = httpResource<Product[]>(() => this.url);
}
