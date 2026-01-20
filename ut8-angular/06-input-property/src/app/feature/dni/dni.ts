import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dni',
  imports: [],
  templateUrl: './dni.html',
  styleUrl: './dni.css',
})
export class Dni {
  public surname = input<string>('');
  public name = input<string>('');
  public dniNumber = input<string>('');
}
