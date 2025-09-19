import * as utils from "./spreadAndTemplate.js";

describe("Spread Operator", () => {
  it("should merge two arrays", () => {
    expect(utils.mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it("should merge two objects", () => {
    expect(utils.mergeObject({ name: "Ana" }, { age: 20 })).toEqual({
      name: "Ana",
      age: 20,
    });
  });
});

describe("Template Strings", () => {
  it("should concats name = Pedro, age = 25 and place = Madrid", () => {
    expect(utils.concatInfoPerson("Pedro", 25, "Madrid")).toBe(
      "Pedro tiene 25 años y vive en Madrid"
    );
  });
  it("should concats name = Ana, age = 30 and place = Barcelona", () => {
    expect(utils.concatInfoPerson("Ana", 30, "Barcelona")).toBe(
      "Ana tiene 30 años y vive en Barcelona"
    );
  });
  it("should return the correct invoice string for a computer", () => {
    expect(utils.generateInvoice("Ordenador", 1000, 2)).toBe(
      `Producto: Ordenador, Precio unitario: 1000€, Cantidad: 2, Total a pagar: 2000€`
    );
  });
  it("should return the correct invoice string for a mouse", () => {
    expect(utils.generateInvoice("Ratón", 10, 3)).toBe(
      `Producto: Ratón, Precio unitario: 10€, Cantidad: 3, Total a pagar: 30€`
    );
  });
});
