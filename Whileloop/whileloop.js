var j = 0;
var stopLoop = false;

while (stopLoop == false && j < 6) {
  //console.log("something");
  if (j == 2) {
    stopLoop = true;
  }
  j++; //output- 3 times "something"
}

var i = 0;
var stopLoop2 = false;

while (stopLoop2 == false || i < 6) {
  //console.log("something again");
  if (i == 4) {
    stopLoop2 = true;
  }
  i++; //output- 6 times "something Again"
}

var s = 0;
var stopLoop3 = false;

while (stopLoop3 == false || s < 6) {
  //console.log("something again");
  if (i == 8) {
    stopLoop3 = true;
  }
 //output- infinite times "something Again"
}

var myArray = [true, true, true, false, true, true];

var myItem = null;

while (myItem !== false) {
  console.log(
    "something again " + myArray.length + "This loop will go until we pop false"
  );
  myItem = myArray.pop();
}
