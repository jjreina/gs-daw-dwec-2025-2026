import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  public product = input<Product>();
}
