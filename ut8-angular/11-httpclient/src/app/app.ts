import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animes } from './features/animes/animes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Animes],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
