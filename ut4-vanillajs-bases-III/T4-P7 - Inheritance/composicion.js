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

class Director {
  name;
  nationality;
  notableFilmography;
  birth; // objeto Birth

  constructor(name, nationality, notableFilmography, birth) {
    this.name = name;
    this.nationality = nationality;
    this.notableFilmography = notableFilmography;
    this.birth = birth; // objeto de tipo Birth
  }
}

class Movie {
  title;
  year;
  genre;
  duration;
  rating;
  synopsis;
  director; // objeto Director

  constructor(title, year, genre, duration, rating, synopsis, director) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.duration = duration;
    this.rating = rating;
    this.synopsis = synopsis;
    this.director = director; // objeto de tipo Director
  }
}

const birth = new Birth("1970-01-01", "Madrid");
const director = new Director(
  "Pedro Almodóvar",
  "Española",
  ["Volver", "Dolor y gloria"],
  birth
);

const movie = new Movie(
  "Dolor y gloria",
  2019,
  "Drama",
  113,
  8.0,
  "Un director reflexiona sobre su vida y carrera.",
  director
);
