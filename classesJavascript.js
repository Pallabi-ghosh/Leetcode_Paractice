//CLASS DECLARATION:
//class is like an empty template of an object, it defines all the properties or methods that an object has but it doesn't give any data or information.
//Class is like a blueprint of an object.

class Car {
  //The constructor method is a special method of a class for creating and initializing an object instance of that class.
  constructor(width, height, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  carStatues() {
    console.log(
      `This car has width ${this.width} and the height ${this.height}.`
    );
  }

  //In JavaScript you can define "static methods" or "static functions" which are functions that are defined on a class
  //but do not actually require an instance of that class to be created.
  static isValiedCar(width, height) {
    return width === height ? true : false;
  }
}

//Object is an instance of a class and contains all the specific details of the class that are not shared with any of the other objects,
//such as the width and height for the car.

const car5 = new Car(44, 166, "black"); //new: The new keyword is used before a class name to create an object using the class constructor.
console.log(car5.color);

console.log(car5.carStatues());

console.log(Car.isValiedCar(188, 188));

//CLASS EXPRESSION:
//A class expression is another way to define a class. Class expressions can be named or unnamed.
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
//console.log(Rectangle.name);
// output: "Rectangle"

// named
Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
//console.log(Rectangle.name);
// output: "Rectangle2"

//CLASS EXTENDS:
//The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
//think about React class (in react we write class every time)

class SUV extends Car {
  constructor(width, height, color, model, carStatues) {
    // keyword super. So basically what it does, it creates a new object and pulls all the stuff that we have in the constructor from the initial class Car
    super(width, height, color, carStatues);
    this.model = model;
  }

  newBrand() {
    return console.log(`This is the new SUV model ${this.model}`);
  }
}

let myCar = new SUV(44, 166, "black", "Ford");
console.log(myCar);

console.log(myCar.newBrand());
