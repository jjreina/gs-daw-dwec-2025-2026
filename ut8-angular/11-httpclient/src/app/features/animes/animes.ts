import { Component, inject } from '@angular/core';
import { AnimeApi } from './services/anime-api';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [],
  templateUrl: './animes.html',
  styleUrl: './animes.css',
})
export class Animes {
  protected readonly animesApi: AnimeApi = inject(AnimeApi);

  protected deleteAnimeById(id: number) {
    if (!confirm('¿Seguro que quieres eliminar este anime?')) return;
    this.animesApi.deleteAnimeById(id).subscribe({
      next: () => {
        this.animesApi.getAllAnimes.reload();
        console.log('Anime eliminado correctamente');
      },
      error: (err) => {
        console.error('Error al eliminar el anime', err);
      },
    });
  }
}
