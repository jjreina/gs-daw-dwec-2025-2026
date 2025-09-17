export class Books {
  #title;
  #author;
  published;

  constructor(title, author, published) {
    this.#title = title;
    this.#author = author;
    this.published = published;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get author() {
    return this.#author;
  }

  set author(author) {
    this.#author = author;
  }

  get published() {
    return this.published;
  }

  set published(published) {
    this.published = published;
  }
}
