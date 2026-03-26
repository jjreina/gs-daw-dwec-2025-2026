import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsApi } from './features/products/services/products-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  public productsApi = inject(ProductsApi);
}
