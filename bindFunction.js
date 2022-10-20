/* bind() Parameters
The bind() can take two parameters:

thisArg - The value provided as this parameter for func.
arg1, ... argN (optional) - The value of arguments present inside func.
 */

// Example 1: Using bind() Method
// object definition
const student1 = {
  name: "Abhishek",
  age: "22",
  introduction: function () {
    console.log(this.name + "studies in grade" + this.grade + ".");
  },
};

// object definition
const student2 = {
  name: "Jimmy ",
  grade: " 5",
  class: "masters",
};

// the object student2 is borrowing introduction method from student1
let result = student1.introduction.bind(student2);

// invoking introduction() function
result();

// Output:
// Jimmy studies in grade 6.

console.log(result);

// Example 2: Using bind() Method with two Parameters
// object definition
const student3 = {
  name: "Jack",
  introduction: function (score) {
    console.log(this.name + "scored " + score + " in an exam.");
  },
};

// object definition
const student4 = {
  name: "Jimmy ",
};

// passing two parameters student2 and '95'
let result2 = student3.introduction.bind(student4, 95);

// invoking result() function
result2(); // Jimmy scored 95 in an exam.

console.log(result2);
