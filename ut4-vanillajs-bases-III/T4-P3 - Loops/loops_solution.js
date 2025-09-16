const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  let arrayNames = [];
  for (let i = 0; i < persons.length; i++) {
    arrayNames.push(persons[i].name);
  }
  return arrayNames;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let arrayNames = [];
  let i = 0;
  do {
    arrayNames.push(persons[i].name);
    i++;
  } while (i < persons.length);
  return arrayNames;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let arrayNames = [];
  let i = 0;
  while (i < persons.length) {
    arrayNames.push(persons[i].name);
    i++;
  }
  return arrayNames;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let arrayAges = [];
  for (let i = 0; i < persons.length; i++) {
    arrayAges.push(persons[i].age);
  }
  return arrayAges;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let arrayAges = [];
  let i = 0;
  do {
    arrayAges.push(persons[i].age);
    i++;
  } while (i < persons.length);
  return arrayAges;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let arrayAges = [];
  let i = 0;
  while (i < persons.length) {
    arrayAges.push(persons[i].age);
    i++;
  }
  return arrayAges;
};
