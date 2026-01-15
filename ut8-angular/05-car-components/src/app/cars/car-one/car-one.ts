import { Component } from '@angular/core';
import { mockCars } from '../mocks/mockData';

@Component({
  selector: 'app-car-one',
  imports: [],
  templateUrl: './car-one.html',
  styleUrl: './car-one.css',
})
export class CarOne {
  protected car = mockCars[1];
}
