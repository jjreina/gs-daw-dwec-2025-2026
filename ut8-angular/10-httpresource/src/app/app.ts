import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinceResponse } from './models/province';
import { httpResource } from '@angular/common/http';
import { Movie } from './models/movies';

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

  readonly url = 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies';
  readonly options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a',
      'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    },
  };

  protected fecthMovies = httpResource<Movie[]>(() => ({
    url: this.url,
    method: this.options.method,
    headers: this.options.headers,
  }));
}
