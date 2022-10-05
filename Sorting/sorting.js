//array in accending order
const animals1 = ["cat", "dog", "elephant", "bee", "ant"];

animals1.sort();

console.log(animals1);

//array in descending order
const animals = ["dog", "mouse", "bat", "cat", "fly", "mice"];

animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(animals);

//sorting alphabetically
const animals2 = ["Dog", "mouse", "Bat", "cat", "fly", "Mice"];

animals2.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

console.log(animals2);

//sorting uppercase to lowercase
let pWords = ["Paris", "panic", "potato", "Portugal"];

pWords.sort();

console.log(pWords);

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//Sort by name
let byName = characters.sort((a, b) => {
  if (a.name < b.name) {
    //since they are not number that's why we have to do the comparision
    return -1;
  }
  return 1;
});

console.log(byName);

//Sort by mass
let byMass = characters.sort((a, b) => a.mass - b.mass);

console.log(byMass);
//Sort by height
let byHeight = characters.sort((a, b) => a.height - b.height);

console.log(byHeight);
//Sort by gender
let byGender = characters.sort((a) => {
  if (a.gender === "female") {
    return 1;
  }
  return -1;
});

console.log(byGender);
