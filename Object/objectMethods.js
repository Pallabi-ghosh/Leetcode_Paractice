/* Methods
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global JavaScript object and .log() is 
a method on that object. Math is also a global JavaScript object and .floor() is a method on it. */
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
//1. Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method
//.retreat() which will console.log() the retreatMessage.
var alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

console.log(alienShip.retreat());

console.log(alienShip.takeOff());
