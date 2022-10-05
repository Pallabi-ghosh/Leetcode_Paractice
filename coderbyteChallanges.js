// Have the function FirstFactorial(num) take the num parameter being passed and
// return the factorial of it. For example: if num = 4, then your program should
// return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18
// and the input will always be an integer.
function FirstFactorial(num) {
  let number = 1;
  for (i = 1; i < num + 1; i++) {
    number = number * i;
  }
  // code goes here
  return number;
}

// keep this function call here
console.log(FirstFactorial(4));

// React Button Toggle
// We provided some simple React template code. Your goal is to modify the component so that you can
// properly toggle the
//  button to switch between an ON state and an OFF state. When the button is on and it is clicked, it
//  turns off and the text within it changes from ON to OFF and vice versa. Make use of component state for this
//  challenge.

// You are free to add classes and styles, but make sure you leave the element ID's as they are.
// Submit your code once it is complete and our system will validate your output.
import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOff: false };
  }

  handleClick() {
    this.setState({ isOff: !this.state.isOff });
  }

  render() {
    const { isOff } = this.state;
    let title = this.state.isOff ? "ON" : "OFF";
    return <button onClick={this.handleClick}>{title}</button>;
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));

/* Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, 
letters, and question marks, and 
check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then 
your program should return the string true, otherwise it should return the string false. If there aren't any 
two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 
3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. */
function QuestionsMarks(str) {
  res = false;
  // code goes here
  for (i = 1; i < str.length; i++) {
    for (j = 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j] === 10)) {
        if (str.slice(i + 1, j).split("?").length - 1 === 3) {
          res = true;
          break;
        } else {
          return false;
        }
      }
    }
  }
  return res;
}

// keep this function call here
console.log(QuestionsMarks("arrb6???4xxbl5???eee5"));
