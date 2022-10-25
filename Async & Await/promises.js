//Promise is like a normal promise that you gave someone, if you keep th promise it will resolve or if you can't keep the promise then it will be rejected.
//along with the promise it comes the "then" method when if your promise is resolved then something will happen and if its rejected "catch" will hold that.
var delay = (seconds) =>
  new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      reject(new Error("its not a number"));
    }
    setTimeout(resolve, seconds * 1000);
  });

console.log("0 sec");

//delay("knk").then(() => console.log("1 sec")); //Error: its not a number

delay(1).then(() => console.log("1 sec"));
delay(5).then(() => console.log("5 sec"));

var promise = new Promise(function (resolve, reject) {
  resolve(1);
});

promise
  .then(function (val) {
    console.log(val); // 1
    return val + 2;
  })
  .then(function (val) {
    console.log(val); // 3
  });

var promise2 = new Promise((resolve, reject) => {
  let a = 1 + 6;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

promise2
  .then((message) => console.log("this is the resolve " + message))
  .catch((message) => console.log("this is the error catch " + message));

function checkInventory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inStock) {
        resolve("Thank you. Your order was successful.");
      } else {
        reject(
          "We're sorry. Your order could not be completed because some items are sold out."
        );
      }
    }, 1000);
  });
}
