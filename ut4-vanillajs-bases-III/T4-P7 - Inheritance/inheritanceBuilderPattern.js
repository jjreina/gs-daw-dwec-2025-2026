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

class DirectorBuilder extends Birth {
  name = "";
  nationality = "";
  notableFilmography = [];
  constructor(date, place) {
    super(date, place);
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setNationality(nationality) {
    this.nationality = nationality;
    return this;
  }

  setNotableFilmography(notableFilmography) {
    this.notableFilmography = notableFilmography;
    return this;
  }

  build() {
    return {
      date: this.date,
      place: this.place,
      name: this.name,
      nationality: this.nationality,
      notableFilmography: [...this.notableFilmography],
    };
  }
}

export class MovieBuilder extends DirectorBuilder {
  title = "";
  year = 0;
  genre = "";
  duration = 0;
  rating = 0;
  synopsis = "";
  constructor(date, place) {
    super(date, place);
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setGenre(genre) {
    this.genre = genre;
    return this;
  }

  setDuration(duration) {
    this.duration = duration;
    return this;
  }

  setRating(rating) {
    this.rating = rating;
    return this;
  }
  setSynopsis(synopsis) {
    this.synopsis = synopsis;
    return this;
  }
  build() {
    return {
      date: this.date,
      place: this.place,
      name: this.name,
      nationality: this.nationality,
      notableFilmography: this.notableFilmography,
      title: this.title,
      year: this.year,
      genre: this.genre,
      duration: this.duration,
      rating: this.rating,
      synopsis: this.synopsis,
    };
  }
}

let movie = new MovieBuilder(
  "31 de octubre de 1961",
  "Pukerua Bay, Nueva Zelanda"
)
  .setName("Peter Jackson")
  .setNationality("Neozelandés")
  .setNotableFilmography(["El Señor de los Anillos", "El Hobbit", "King Kong"])
  .setTitle("El Señor de los Anillos: La Comunidad del Anillo")
  .setYear(2001)
  .setGenre("Fantasía")
  .setDuration(179)
  .setRating(9.2)
  .setSynopsis(
    "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron."
  )
  .build();

console.log(movie);
