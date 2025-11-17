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

let previousRadio = null; // ← radio previamente seleccionado

export const containerRadioGroup = (makes) => {
  const container = document.createElement("div");
  container.className = "radio-group";
  makes.forEach((make, index) => {
    const label = createLabel("radio-label");
    const input = createInput(make);
    if (index === 0) {
      input.checked = true;
      previousRadio = input;
    }
    input.addEventListener("change", () => {
      console.log(`Selected make: ${make}`);
      if (previousRadio && previousRadio !== input) {
        previousRadio.checked = false;
      }
      previousRadio = input;
    });
    const span = createSpan(make);
    label.append(input, span);
    container.appendChild(label);
  });
  return container;
};
