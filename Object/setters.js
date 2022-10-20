/* Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
set - to define a setter method to set the property value
 */
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  numOfSensors: 15,
  set changeNumOfSensors(num) {
    this.numOfSensors = num;
  },
  set changeEnergyLevel(newEnergyLevel) {
    this.energyLevel = newEnergyLevel;
  },
};

robot.changeNumOfSensors = 10;

console.log(robot.numOfSensors); // 10

// change(set) object property using a setter
robot.changeEnergyLevel = 1000;

console.log(robot.energyLevel); //1000

const student = {
  firstName: "Monica",

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = "Sarah";

console.log(student.firstName); // Sarah
