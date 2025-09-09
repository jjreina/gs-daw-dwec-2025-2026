// getElementById
const h1 = document.getElementById("titulo");
console.log(h1.textContent, "-> get via getElementById");

// getElementsByClassName
const paragraphs = document.getElementsByClassName("parrafo");
for (let p of paragraphs) {
  console.log(p.textContent, "-> get via getElementsByClassName");
}

// getElementsByName
const inputName = document.getElementsByName("nombre");
console.log(inputName[0].placeholder, "-> get via getElementsByName");

const inputSurname = document.getElementsByName("apellido");
console.log(inputSurname[0].placeholder, "-> get via getElementsByName");

// getElementsByTagName
const li = document.getElementsByTagName("li");
Array.from(li).forEach((item) =>
  console.log(item.textContent, "-> get via getElementsByTagName")
);

// querySelector
const h1Selector = document.querySelector("#titulo");
console.log(h1Selector.textContent, "-> get via querySelector");

// querySelectorAll
const allparagraphs = document.querySelectorAll(".parrafo");
Array.from(allparagraphs).forEach((p) =>
  console.log(p.textContent, "-> get via querySelectorAll")
);
