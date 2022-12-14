/* Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable). */
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below
//1. Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};
greenEnergy(spaceship);

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

remotelyDisable(spaceship);

console.log(spaceship);
