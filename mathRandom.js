// 1. Inside of your HospitalEmployee class, create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000.
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

console.log(HospitalEmployee.generatePassword());

//In the example above, we create a static method called .generateName() that returns a random name when it’s called.
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
    const randomNumber = Math.floor(Math.random() * 5);
    return names[randomNumber];
  }
}
console.log(Animal.generateName()); // returns random name

//The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.
function getRandomInt() {
  return Math.floor(Math.random() * 10);
}
console.log(getRandomInt(100));

//The Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95));
