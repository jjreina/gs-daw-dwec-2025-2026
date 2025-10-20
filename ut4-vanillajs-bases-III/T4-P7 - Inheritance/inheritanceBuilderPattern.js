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
  name;
  nationality;
  notableFilmography;
  constructor(date, place) {
    super(date, place);
    this.name = '';
    this.nationality = '';
    this.notableFilmography = [];
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
    return new DirectorBuilder(this.date, this.place, this.name, this.nationality, this.notableFilmography);
  }

}

export class MovieBuilder extends DirectorBuilder {
  title;
  year;
  genre;
  duration;
  rating;     
  synopsis;
  constructor(date, place) {
    super(date, place);
    this.title = '';
    this.year = 0;
    this.genre = '';
    this.duration = 0;
    this.rating = 0;     
    this.synopsis = '';
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
    return new MovieBuilder(this.date, this.place, this.name, this.nationality, this.notableFilmography, this.title, this.year, this.genre, this.duration, this.rating, this.synopsis);
  } 

}

let movie = new MovieBuilder("31 de octubre de 1961", "Pukerua Bay, Nueva Zelanda")
  .setName("Peter Jackson")
  .setNationality("Neozelandés")  
  .setNotableFilmography(["El Señor de los Anillos", "El Hobbit", "King Kong"])
  .setTitle("El Señor de los Anillos: La Comunidad del Anillo")
  .setYear(2001)
  .setGenre("Fantasía")
  .setDuration(179)
  .setRating(9.2)
  .setSynopsis("Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron.")
  .build();
