import { Component } from '@angular/core';
import { Test } from '../../services/test';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  constructor(public test: Test) {}
}
