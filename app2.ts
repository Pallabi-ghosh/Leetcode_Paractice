let nameAgeMapping = new Map<string, number>();
let myName = "Pallabi";

nameAgeMapping.set("Polo", 77);
nameAgeMapping.set("Arnab", 47);

console.log(`this is the string ${myName}`)

interface Person {
    name: string;
    age: number;
    city: boolean
}
/* 
declare var Person: {
    prototype: Person;
    new(init?: PersonInit): Person;
}

type PersonInit = string[][] | Record<string, string> | Person;

let personName = new Person()

console.log(personName.name) */

const variableName = "this is something".indexOf("is") > -1

console.log(variableName) //true

const variableName2 = "This is a string".indexOf("is")

console.log(variableName2) //2

//indexOf(searchElement, position)
const variableName3 = "This is a string".indexOf("is", -5)//because -5 it becomes 0

console.log(variableName3) //2

//indexOf(searchElement, fromIndex)
const variableName4 = "This is a string".indexOf("is", 13)

console.log(variableName4) //-1

//this is count from last
const variableName5 = "This is a string".lastIndexOf("is")

console.log(variableName5) //5

const variableName6 = "This is a string".lastIndexOf("is") > -1

console.log(variableName6) //true


