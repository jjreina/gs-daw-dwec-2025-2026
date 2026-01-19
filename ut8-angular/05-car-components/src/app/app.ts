import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarCero } from './cars/car-cero/car-cero';
import { CarOne } from './cars/car-one/car-one';
import { CarTwo } from './cars/car-two/car-two';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarCero, CarOne, CarTwo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title: string = 'Mock Data Cars';
  protected carSelected: string = '';

  protected onSelectCar(event: any): void {
    this.carSelected = event.target.textContent;
  }
}
