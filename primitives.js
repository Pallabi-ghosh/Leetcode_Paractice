//Primitives are copied by their Values 

let number = 10;

function increase(param1) {
  param1++;
  console.log(param1);
}
console.log(increase(number));
console.log(number);
 