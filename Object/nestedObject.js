let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

//1. Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it.
//Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
var capFave = spaceship.crew.captain["favorite foods"][0];

console.log(capFave);

//change the passengers null value with the array of object key-value pair
spaceship.passengers = [
  { name: "Polo", age: 29, live: "Denmark" },
  { name: "Leo", age: 2, live: "Poland" },
];

console.log(spaceship);

var firstPassenger = spaceship.passengers[0];

console.log(firstPassenger);
