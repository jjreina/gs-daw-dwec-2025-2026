import { fetchCarMakes } from "./apiServices.js";
import { containerRadioGroup } from "./domHelper.js";

let makes;
const run = async () => {
  makes = await fetchCarMakes();
  const containerRadios = document.querySelector(".radio-container");
  const radioGroup = containerRadioGroup(makes.slice(0, 5), document.querySelector(".cards-grid"));
  containerRadios.appendChild(radioGroup);
};

run();
