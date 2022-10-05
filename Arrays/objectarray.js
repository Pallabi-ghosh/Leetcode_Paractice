objArray = [
  { foo: 1, bar: 2 },
  { foo: 3, bar: 4 },
  { foo: 5, bar: 6 },
  { fail: "fat" },
];

for (i = 0; i < objArray.length; i++) {
  //console.log(objArray[i].bar);
  //console.log(objArray[i].foo);
  //console.log(objArray[i].fail);
}

//To access the JSON object in JavaScript, parse it with JSON.parse(), and access it via “.” or “[]”.

var json = {
  name: "Pallabi",
  age: 29,
  address: {
    streetAddress: "Grontorvet",
    city: "Copenhagen",
  },
  phoneNumber: [
    {
      type: "home",
      number: "111 111-1111",
    },
    {
      type: "fax",
      number: "222 222-2222",
    },
  ],
};

//This is called reference object in javascript
const json2 = json;

json.color = "black"

json2.color = 'white'

console.log(json)

console.log(json2)

//fetch phone number and city
console.log(json.phoneNumber[0].number);

console.log(json.phoneNumber[1].type);

console.log(json["address"].city);

console.log(json["age"]);

