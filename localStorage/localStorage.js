var myObj = {
  name: "Pallabi",
  age: 22,
  weight: 58,
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.getItem(myObj_serialized);
console.log(localStorage);
