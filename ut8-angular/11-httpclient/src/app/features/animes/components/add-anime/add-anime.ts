import { Component, inject } from '@angular/core';
import { Anime } from '../../models/anime';
import { AnimeApi } from '../../services/anime-api';

@Component({
  selector: 'app-add-anime',
  imports: [],
  templateUrl: './add-anime.html',
  styleUrl: './add-anime.css',
})
export class AddAnime {
  protected readonly animesApi: AnimeApi = inject(AnimeApi);

  protected addNewAnime(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);

    // TODO: Validate form data before creating the new Anime object
    // Create a new Anime object using the form data
    const newAnime: Anime = {
      id: Date.now(),
      title: fd.get('name') as string,
      originalTitle: fd.get('name') as string,
      year: Number(fd.get('year')),
      studio: '',
      genres: [String(fd.get('genre'))],
      episodes: Number(fd.get('episodes')),
      finished: Boolean(fd.get('finished')),
      rating: Number(fd.get('rating')),
    };

    this.animesApi.addNewAnime(newAnime).subscribe({
      next: (anime) => {
        console.log('Anime added successfully', anime);
        this.animesApi.getAllAnimes.reload();
        form.reset();
      },
      error: (err) => {
        console.error('Error adding the anime', err);
      },
    });
  }
}
