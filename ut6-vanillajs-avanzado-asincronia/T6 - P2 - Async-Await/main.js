import { parserToPersonClass } from "./utils.js";
import { people } from "./mockPerson.js";


const run = async () => {
  let result = await parserToPersonClass(people);
  console.log(result);
}

run();