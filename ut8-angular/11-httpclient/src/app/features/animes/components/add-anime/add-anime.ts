import { Component } from '@angular/core';
import { Anime, FormAnime } from '../../models/anime';

@Component({
  selector: 'app-add-anime',
  imports: [],
  templateUrl: './add-anime.html',
  styleUrl: './add-anime.css',
})
export class AddAnime {
  protected addNewAnime(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));
    console.log(data);

    const newAnime: Anime = {
      id: 0,
      title: fd.get('name') as string,
      originalTitle: fd.get('name') as string,
      year: Number(fd.get('year')),
      studio: '',
      genres: [String(fd.get('genre'))],
      episodes: Number(fd.get('episodes')),
      finished: Boolean(fd.get('finished')),
      rating: Number(fd.get('rating')),
    };
    console.log(newAnime);
  }
}
