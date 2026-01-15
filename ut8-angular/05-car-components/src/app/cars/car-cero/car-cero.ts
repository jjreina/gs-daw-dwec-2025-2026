import { Component } from '@angular/core';
import { mockCars } from '../mocks/mockData';

@Component({
  selector: 'app-car-cero',
  imports: [],
  templateUrl: './car-cero.html',
  styleUrl: './car-cero.css',
})
export class CarCero {
  protected car = mockCars[0];
}
