function func() {
  // Original array
  const items = [12, 24, 36];
  const copy = [];
  items.forEach(function (item) {
    copy.push(item + item + 2); // here: (12+12+2)= 26
  });
  //console.log(copy);
}
func();

function func2() {
  // Original array
  const items2 = [1, 29, 47];
  const copy2 = [];
  items2.forEach(function (item, i) {
    copy2.push(item * item); // here: (29*29)= 841
    //console.log(i);
  });
  console.log(copy2);
}
func2();
