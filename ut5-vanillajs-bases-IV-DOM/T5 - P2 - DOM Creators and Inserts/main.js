const body = document.querySelector("body");

const img = document.createElement("img");
const h1 = document.createElement("h1");
const p_1 = document.createElement("p");
const p_2 = document.createElement("p");
const p_3 = document.createElement("p");

img.src = "./assests/img_la.jpg";
img.alt = "LA";
h1.textContent = "This is a Heading";
p_1.textContent = "This is a paragraph.";
p_2.textContent = "This is a another paragraph.";
p_3.textContent = "This is a another paragraph.";

/*body.appendChild(img);
body.appendChild(h1);
body.appendChild(p_1);
body.appendChild(p_2);
body.appendChild(p_3);*/

body.append(img, h1, p_1, p_2, p_3);
