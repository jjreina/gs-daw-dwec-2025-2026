import { Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { CardProduct } from "../card-product/card-product";

@Component({
  selector: 'app-list-products',
  imports: [CardProduct],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {
  public products = input<Product[]>();
}
