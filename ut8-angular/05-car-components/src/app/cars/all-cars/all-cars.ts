import { Component } from '@angular/core';
import { mockCars } from '../mocks/mockData';

@Component({
  selector: 'app-all-cars',
  imports: [],
  templateUrl: './all-cars.html',
  styleUrl: './all-cars.css',
})
export class AllCars {
  protected cars = mockCars;
}
