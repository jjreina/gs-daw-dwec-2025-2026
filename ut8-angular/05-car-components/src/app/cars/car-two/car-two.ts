import { Component } from '@angular/core';
import { mockCars } from '../mocks/mockData';

@Component({
  selector: 'app-car-two',
  imports: [],
  templateUrl: './car-two.html',
  styleUrl: './car-two.css',
})
export class CarTwo {
  protected car = mockCars[2];
}
