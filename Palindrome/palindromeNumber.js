/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not. */

x = -10;

function palindromeNumber(number) {
  number = x.toString().split("");
  //console.log(num);

  for (i = 0; i < number.length; i++) {
    if (number[i] != number[number.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeNumber(x));
