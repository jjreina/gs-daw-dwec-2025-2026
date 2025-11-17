import { fetchCarData, fetchCarMakes } from "./utils.js";
import { containerRadioGroup } from "./helperDOM.js";

let makes;
const run = async () => {
  makes = await fetchCarMakes();
  // console.log(makes.slice(0, 5));
  const containerRadios = document.querySelector(".radio-container");
  const radioGroup = containerRadioGroup(makes.slice(0, 5));
  containerRadios.appendChild(radioGroup);
};

run();
