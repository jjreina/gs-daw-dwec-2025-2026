import { parserToPersonClass } from "./utils.js";
import { people } from "./mockPerson.js";

parserToPersonClass(people)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(new Error(error));
  })
  .finally(() => {
    console.log("Process finished");
  });
