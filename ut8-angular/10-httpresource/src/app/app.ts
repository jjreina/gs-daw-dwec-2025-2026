import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinceResponse } from './models/province';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected provincesResource = httpResource<ProvinceResponse>(
    () => 'http://localhost:3000/provinces',
  );
}
