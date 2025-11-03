const button = document.querySelector("button");
const selectElement = document.querySelector("select");

button.addEventListener("click", (event) => {
  console.log("event:", event);
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
  console.log("event.target.textContent:", event.target.textContent);
});

selectElement.addEventListener("change", (event) => {
  console.log("event:", event);
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
  console.log("event.target.value:", event.target.value);
  console.log("event.target.selectedOptions:", event.target.selectedOptions);
});
