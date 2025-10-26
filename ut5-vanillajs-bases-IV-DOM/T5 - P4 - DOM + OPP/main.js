import { Price } from "./classes/price.js";
import { Review } from "./classes/review.js";
import { Product } from "./classes/product.js";
import { createReviewItem } from "./utils/domHelper.js";

let price = new Price("USD", 399.0);
let review = new Review(4.6, 73);
let product = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg"
);
product.score = 335.8;
product.price = price;
product.review = review;

const container = document.querySelector(".container");
const ul = document.createElement("ul");
let keysProduct = Object.keys(product);
let valuesProduct = Object.values(product);

keysProduct.forEach((item, index) => {
  if (item === "review") {
    createReviewItem(valuesProduct[index], ul);
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent =
      item === "price"
        ? `${item} = ${valuesProduct[index].currentPrice} ${valuesProduct[index].currency}`
        : `${item} = ${valuesProduct[index]}`;
    li.appendChild(p);
    ul.appendChild(li);
  }
});

container.appendChild(ul);
