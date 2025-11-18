import { fetchCarDataByMake } from "./apiServices.js";

let previousRadio = null; // ← radio previamente seleccionado

const createLabel = (className) => {
  const label = document.createElement("label");
  label.className = className;
  return label;
};

const createInput = (name) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;
  input.value = name.toLowerCase();
  return input;
};

const createSpan = (text) => {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
};

const createCard = (car) => {
  const card = document.createElement("div");
  card.className = "card";    
  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  const h3 = document.createElement("h3");
  h3.textContent = `Fabricante: ${car.make} `;
  h3.className = "card-title";
  const pHeader = document.createElement("p");
  pHeader.textContent = `Modelo: ${car.model}`;
  pHeader.className = "card-description";
  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  const pContent = pHeader.cloneNode();
  pContent.textContent = `Tipo: ${car.type}`;
  cardHeader.append(h3, pHeader);
  cardContent.appendChild(pContent);
  card.append(cardHeader, cardContent);
  return card;
}

const changeRadioSelection = (newRadio) => {
  if (previousRadio && previousRadio !== newRadio) {
    previousRadio.checked = false;
  } 
  previousRadio = newRadio;
  const cardsGridContainer = document.querySelector(".cards-grid");
  cardsGridContainer.innerHTML = ""; // limpiar el contenedor de tarjetas
  fetchCarDataByMake(newRadio.value).then((data) => {
    data.forEach(card => {
      cardsGridContainer.appendChild(createCard(card));
    });
  });
};

export const containerRadioGroup = (makes) => {
  const container = document.createElement("div");
  container.className = "radio-group";
  makes.forEach((make, index) => {
    const label = createLabel("radio-label");
    const input = createInput(make);
    if (index === 0) {
      input.checked = true;
      previousRadio = input;
      setTimeout(() => { // necesario porque la primera vez se envian dos peticiones casi seguidas: makes y cars
        fetchCarDataByMake(input.value).then((data) => {
          data.forEach(card => {
          document.querySelector(".cards-grid").appendChild( 
            createCard(card));
          });
        });
      }, 1000);
    }
    input.addEventListener("change", () => changeRadioSelection(input));
    const span = createSpan(make);
    label.append(input, span);
    container.appendChild(label);
  });
  return container;
};
