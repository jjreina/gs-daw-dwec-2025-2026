import { Component, inject } from '@angular/core';
import { ProductsApi } from './services/products-api';
import { ListProducts } from "./component/list-products/list-products";

@Component({
  selector: 'app-products',
  imports: [ListProducts],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  public productsApi = inject(ProductsApi);
}
