const body = document.querySelector("body");

const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const form = document.createElement("form");
const label_datemax = document.createElement("label");
const label_datemin = document.createElement("label");
const label_quantity = document.createElement("label");
const input_datemax = document.createElement("input");
const input_datemin = document.createElement("input");
const input_quantity = document.createElement("input");
const input_submit = document.createElement("input");
const br = document.createElement("br");

h1.textContent = "The input min and max attributes";

p.textContent =
  "The min and max attributes specify the minimum and maximum values for an input element.";

form.action = "/action_page.php";

label_datemax.textContent = "Enter a date before 1980-01-01: ";
label_datemax.htmlFor = "datemax";

input_datemax.type = "date";
input_datemax.id = "datemax";
input_datemax.name = "datemax";
input_datemax.max = "1979-12-31";

label_datemin.textContent = "Enter a date after 2000-01-01: ";
label_datemin.htmlFor = "datemin";

input_datemin.type = "date";
input_datemin.id = "datemin";
input_datemin.name = "datemin";
input_datemin.max = "2000-01-02";

label_quantity.textContent = "Quantity (between 1 and 5): ";
label_quantity.htmlFor = "quantity";

input_quantity.type = "number";
input_quantity.id = "quantity";
input_quantity.name = "quantity";
input_quantity.min = "1";
input_quantity.max = "5";

input_submit.type = "submit";
input_submit.value = "Submit";

/*form.appendChild(label_datemax);
form.appendChild(input_datemax);
form.appendChild(br);
form.appendChild(br.cloneNode());

form.appendChild(label_datemin);
form.appendChild(input_datemin);
form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

form.appendChild(label_quantity);
form.appendChild(input_quantity);
form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

form.appendChild(input_submit);*/
form.append(label_datemax, input_datemax, br, br.cloneNode());
form.append(label_datemin, input_datemin, br.cloneNode(), br.cloneNode());
form.append(label_quantity, input_quantity, br.cloneNode(), br.cloneNode());
form.append(input_submit);

/*div.appendChild(h1);
div.appendChild(br.cloneNode());*/
div.append(h1, br.cloneNode());

/*div.appendChild(p);
div.appendChild(br.cloneNode());*/
div.append(p, br.cloneNode());

div.appendChild(form);

body.appendChild(div);
