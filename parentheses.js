// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

s = "{}";

function isValid(param1) {
  var parentheses = ["(", ")", "{", "}", "[", "]"];
  for (j = 0; j < parentheses.length; j++) {
    var splitS = param1.split("");
    console.log(splitS);
    for (i = 0; i < splitS.length; i++) {
      //console.log(splitS[i]);
      if (splitS[i] == parentheses[j]) {
        return true;
      }
      return false;
    }
  }
}

console.log(isValid(s));
