s = "race a car";

//Output: true

function isPalindrome(s) {
  if (s.length === 0 || s === " ") {
    return true;
  }

  var removeCommaColon = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  //console.log(removeCommaColon);

  var string = removeCommaColon.split("");
  //console.log(string);

  for (i = 0; i < string.length; i++) {
    //console.log("First poiunter" + " " + string[i]);
    //console.log("First poiunter" + " " + string[string.length - 1 - i]);
    if (string[i] != string[string.length - 1 - i]) {
      //console.log("First poiunter" + " " + string[i]);
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(s));
