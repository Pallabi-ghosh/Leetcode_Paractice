var pages = {
  first: "hello",
  second: "alaska",
  third: "dad",
  forth: "peace",
};

for (var p in pages) {
  //console.log(p, pages[p]);
}

//If you need to iterate through a second level property or field you can nest for loops. The biggest thing you need to keep 
//track of is declaring a separate index variable.

let myArray = [
  { child: ["one", "two", "three", "four"] },
  { child: ["five", "six", "seven", "eight"] },
];

for (let i = 0; i < myArray.length; i++) {
  let childArray = myArray[i].child;
  //console.log(myArray);
  for (let j = 0; j < childArray.length; j++) {
    console.log(childArray[j]);
  }
}
