import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hello-world-angular');
  protected inputValue: String = '';

  clickEvent(value: string): void {
    this.inputValue = value;
  }

  helloWorld(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    console.log(element.textContent);
  }
}
