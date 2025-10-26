export const createReviewItem = (reviewObject, ul) => {
  let values = Object.values(reviewObject);
  Object.keys(reviewObject).forEach((item, i) => {
    // Position 0, create rating
    // Position 1, create total reviews
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = `${item} = ${values[i]}`;
    li.appendChild(p);
    ul.appendChild(li);
  });
};
