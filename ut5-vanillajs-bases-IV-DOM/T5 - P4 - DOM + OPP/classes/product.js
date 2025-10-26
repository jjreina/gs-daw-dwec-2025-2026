import { Price } from "./price.js";
import { Review } from "./review.js";

export class Product {
  nameProduct;
  urlProduct;
  urlImage;
  score;
  price;
  review;
  constructor(nameProduct, urlProduct, urlImage) {
    this.nameProduct = nameProduct;
    this.urlProduct = urlProduct;
    this.urlImage = urlImage;
  }

  get score() {
    return this.score;
  }

  set score(score) {
    this.score = score;
  }

  /** return @type {Price} */
  get price() {
    return this.price;
  }

  /** set @type {Price} */
  set price(price) {
    this.price = price;
  }

  /** return @type {Review} */
  get review() {
    return this.review;
  }

  /** set @type {Review} */
  set review(review) {
    this.review = review;
  }
}
