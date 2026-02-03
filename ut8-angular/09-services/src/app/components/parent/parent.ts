import { Component } from '@angular/core';
import { Child } from '../child/child';
import { Test } from '../../services/test';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  constructor(public test: Test) {}
}
