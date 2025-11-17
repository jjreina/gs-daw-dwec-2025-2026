import { Person } from "./person.js";

export const parserToPersonClass = (people) => {
  return new Promise((resolve, reject) => {
    // Forma corta: if (people || Object.keys(people).length === 0) people || ... ya compurueba null y undefined
    if (
      people === null ||
      people === undefined ||
      Object.keys(people).length === 0
    ) {
      reject("The people literal object is not ok");
    } else {
      let arrayOfPerson = Object.values(people).map((person) => {
        let newPerson = new Person(person.name, person.age);
        return newPerson;
      });
      resolve(arrayOfPerson);
    }
  });
};