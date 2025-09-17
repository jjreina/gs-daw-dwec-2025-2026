import { Movie } from "./inheritance";

const title = "El Señor de los Anillos: La Comunidad del Anillo";
const name = "Peter Jackson";
const nationality = "Neozelandés";
const date = "31 de octubre de 1961";
const place = "Pukerua Bay, Nueva Zelanda";
const notableFilmography = [
  "El Señor de los Anillos",
  "El Hobbit",
  "King Kong",
];
const year = 2001;
const genre = "Fantasía";
const duration = 178;
const rating = 9.2;
const synopsis =
  "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron.";

let theLordOfTheRing = new Movie(
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
);
describe("Inheritance - Birth class", () => {
  it("should gets date and place birth of Peter Jacson", () => {
    expect(theLordOfTheRing.date).toBe("31 de octubre de 1961");
    expect(theLordOfTheRing.place).toBe("Pukerua Bay, Nueva Zelanda");
  });
});
describe("Inheritance - Director class", () => {
  it("should gets name, nationality and notableFilmography for Director", () => {
    expect(theLordOfTheRing.name).toBe("Peter Jackson");
    expect(theLordOfTheRing.nationality).toBe("Neozelandés");
    /*expect(theLordOfTheRing.notableFilmography[0]).toBe(
      "El Señor de los Anillos"
    );
    expect(theLordOfTheRing.notableFilmography[1]).toBe("El Hobbit");
    expect(theLordOfTheRing.notableFilmography[2]).toBe("King Kong");*/
    expect(theLordOfTheRing.notableFilmography).toEqual([
      "El Señor de los Anillos",
      "El Hobbit",
      "King Kong",
    ]);
  });
});
describe("Inheritance - Movie class", () => {
  it("should gets title, year, genre, duration, rating and synopsis for El Señor de los Anillos", () => {
    expect(theLordOfTheRing.title).toBe(
      "El Señor de los Anillos: La Comunidad del Anillo"
    );
    expect(theLordOfTheRing.year).toBe(2001);
    expect(theLordOfTheRing.genre).toBe("Fantasía");
    expect(theLordOfTheRing.duration).toBe(178);
    expect(theLordOfTheRing.rating).toBe(9.2);
    expect(theLordOfTheRing.synopsis).toBe(
      "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron."
    );
  });
});
