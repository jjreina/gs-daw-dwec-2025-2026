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

  protected editAnimeById(id: number) {
    let newEpisodes = prompt('Edit the number of episodes for this anime');
    if (newEpisodes === null) return; // User cancelled the prompt
    const episodesNumber = parseInt(newEpisodes, 10);
    if (isNaN(episodesNumber)) {
      alert('Please enter a valid number');
      return;
    }
    this.animesApi.updateAnimeById(id, episodesNumber).subscribe({
      next: () => {
        this.animesApi.getAllAnimes.reload();
        console.log('Anime updated successfully');
      },
      error: (err) => {
        console.error('Error updating the anime', err);
      },
    });
  }

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
