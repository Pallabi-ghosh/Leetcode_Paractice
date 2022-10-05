// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

let s = "   fly me   to   the moon  ";

function lengthOfLastWord(param1) {
  var splitS = param1
    .replace(/^[ ]+/g | /[ ]+$/g, "")
    .replace(/[ ]+$/g, "")
    .split(" ");
  console.log(splitS);

  var length = splitS[splitS.length - 1].length;
  console.log(length);
}

lengthOfLastWord(s);
