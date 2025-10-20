class Car {
  constructor(brand) {
    this.brand = brand;
    this.model = null;
    this.year = null;
    this.color = null;
    this.price = null;
  }

  setModel = (model) => {
    this.model = model;
    return this;
  };

    setYear = (year) => {   
    this.year = year;
    return this;
  };

  setColor = (color) => {
    this.color = color;
    return this;
  };

  setPrice = (price) => {
    this.price = price;
    return this;
  };

  build = () => {
    if (this.model === null || this.year === null || this.color === null || this.price === null) {
      throw new Error('Missing properties to build the car');
    }
    return this;
  };

}

let car = new Car('Toyota')
    .setColor('Red')
    .setModel('Corolla')
    .setYear(2020)
    .setPrice(20000)
    .build();    
