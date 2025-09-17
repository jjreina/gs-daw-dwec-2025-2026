export class Person {
  #name;
  #surname;
  country;
  age;
  constructor(name, surname, country, age) {
    this.#name = name;
    this.#surname = surname;
    this.country = country;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get surname() {
    return this.#surname;
  }

  set surname(surname) {
    this.#surname = surname;
  }

  get country() {
    return this.country;
  }

  set country(country) {
    this.country = country;
  }

  get age() {
    return this.age;
  }

  set age(age) {
    this.age = age;
  }
}
