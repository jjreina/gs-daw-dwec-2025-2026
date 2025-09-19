//** spread operator **//

export const mergeArrays = (array1, array2) => {
  return [...array1, ...array2];
};

export const mergeObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//** String templates **//

export const concatInfoPerson = (name, age, place) => {
  return `${name} tiene ${age} años y vive en ${place}`;
};

export const generateInvoice = (producto, precio, cantidad) => {
  const total = precio * cantidad;
  return `Producto: ${producto}, Precio unitario: ${precio}€, Cantidad: ${cantidad}, Total a pagar: ${total}€`;
};
