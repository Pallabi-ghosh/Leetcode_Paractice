//The this keyword references the calling object which provides access to the calling object’s properties.
//do not use arrow function and this together, its better to do either of this at a time.
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.  
  `;
  },
};

console.log(robot.provideInfo());
