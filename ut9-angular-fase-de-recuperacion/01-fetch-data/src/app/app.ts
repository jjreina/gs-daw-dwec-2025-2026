import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./features/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products],
  templateUrl: './app.html',
})
export class App {

}
