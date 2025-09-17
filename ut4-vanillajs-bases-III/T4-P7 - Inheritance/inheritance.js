class Birth {
  #date;
  #place;
  constructor(date, place) {
    this.#date = date;
    this.#place = place;
  }
  get date() {
    return this.#date;
  }

  get place() {
    return this.#place;
  }
}

class Director extends Birth {
  name;
  nationality;
  notableFilmography;
  constructor(date, place, name, nationality, notableFilmography) {
    super(date, place);
    this.name = name;
    this.nationality = nationality;
    this.notableFilmography = notableFilmography;
  }
}

export class Movie extends Director {
  title;
  year;
  genre;
  duration;
  rating;
  synopsis;
  constructor(
    date,
    place,
    name,
    nationality,
    notableFilmography,
    title,
    year,
    genre,
    duration,
    rating,
    synopsis
  ) {
    super(date, place, name, nationality, notableFilmography);
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.duration = duration;
    this.rating = rating;
    this.synopsis = synopsis;
  }
}
