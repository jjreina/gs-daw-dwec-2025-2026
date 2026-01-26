import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './features/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected name: string = ""
  protected email: string = ""
  protected message: string = ""
}
