import { inject, Injectable } from '@angular/core';
import { Anime } from '../models/anime';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeApi {
  private http: HttpClient = inject(HttpClient);

  private readonly url: string = 'http://localhost:3000/animes';

  public readonly getAllAnimes = httpResource<Anime[]>(() => this.url);

  public readonly deleteAnimeById = (idAnime: number): Observable<void> => {
    return this.http.delete<void>(`${this.url}/${idAnime}`);
  };

  public readonly updateAnimeById = (idAnime: number, newEpisodes: number): Observable<Anime> => {
    return this.http.patch<Anime>(`${this.url}/${idAnime}`, { episodes: newEpisodes });
  };
}
