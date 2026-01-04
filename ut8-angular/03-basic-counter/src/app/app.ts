import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Counter implemented with Angular');

  protected account: number = 0;

  protected onClick(event: any): void {
    event.target.innerText === '+' ? this.account++ : this.account--;
  }

  protected reset(): void {
    this.account = 0;
  }
}
