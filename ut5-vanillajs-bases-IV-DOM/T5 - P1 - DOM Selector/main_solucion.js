import {
  getAllChipClass,
  getAllParagraphs,
  getAllListItems,
  getAllOptionFromThemeSelect,
  getUserFromForm,
  getMailFromForm,
  getAllColorRadios,
  getAllCheckboxes,
  getAllOptionsFromCursosSelect,
  getTextArea,
  getThemeSelectedOption,
  getColorSelectedRadio,
  getCheckBoxSelected,
} from "./utils_solucion.js";

console.log(getAllChipClass());
console.log(getAllParagraphs());
console.log(getAllListItems());
console.log(getAllOptionFromThemeSelect());
console.log(getUserFromForm());
console.log(getMailFromForm());
console.log(getAllColorRadios());
console.log(getAllCheckboxes());
console.log(getAllOptionsFromCursosSelect());
console.log(getTextArea());

console.log("--------------------------------------------------");

console.log("Mostrar todos los textos de los elementos con clase Chip....");
Array.from(getAllChipClass()).forEach((span) => {
  console.log(span.textContent);
});

console.log("Mostrar todos los textos de los párrafos....");
Array.from(getAllParagraphs()).forEach((p) => {
  console.log(p.textContent);
});

console.log("Mostrar todos los textos de los elementos de lista....");
Array.from(getAllListItems()).forEach((li) => {
  console.log(li.textContent);
});

console.log("Mostrar todas las opciones del select de temas....");
Array.from(getAllOptionFromThemeSelect()).forEach((option) => {
  console.log(`${option.value} -> ${option.textContent}`);
});

console.log("Mostrar la opción seleccionada del select de temas....");
console.log(getThemeSelectedOption());

console.log("Mostrar el valor de los campos de usuario y correo....");
console.log(getUserFromForm().value);
console.log(getMailFromForm().value);

console.log("Mostrar todos los radios de colores....");
Array.from(getAllColorRadios()).forEach((radio) => {
  console.log(`${radio.value} -> ${radio.checked}`);
});

console.log("Mostrar el radio seleccionado de colores....");
console.log(getColorSelectedRadio().value);

console.log("Mostrar todos los checkboxes....");
Array.from(getAllCheckboxes()).forEach((checkbox) => {
  console.log(`${checkbox.value} -> ${checkbox.checked}`);
});

console.log("Mostrar el checkbox seleccionado....");
console.log(getCheckBoxSelected().value);

console.log("Mostrar todas las opciones del select de cursos....");
Array.from(getAllOptionsFromCursosSelect()).forEach((option) => {
  console.log(`${option.value} -> ${option.textContent}`);
});

console.log("Mostrar el contenido del textarea....");
console.log(getTextArea().placeholder);
