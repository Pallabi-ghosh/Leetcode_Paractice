function palindrome(str) {
  var sum = str.split("");
  //console.log(sum)
  for (s = 0; s < sum.length; s++) {
    if (sum[s] != sum[sum.length - 1 - s]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("fhjhkkjkjlkkf"));

var arrayOfWords = [
  "arnab",
  "pallabi",
  "sonos",
  "afternoon",
  "noon",
  "mouse",
  "cat",
  "bat",
];

var newArray = [];

function isPalindrome(param1) {
  for (i = 0; i < param1.length; i++) {
    var arrayOfWordsSplit = arrayOfWords[i].split("");
    //console.log(arrayOfWordsSplit)
    var stopLoop = false;
    var j = 0;
    while (stopLoop == false && j < arrayOfWordsSplit.length) {
      //console.log("First poiunter" + " " +j);
      //console.log("First poiunter" + " " +arrayOfWordsSplit[j]);
      //console.log("First poiunter" + " " +(arrayOfWordsSplit.length - 1 -j));
      if (
        arrayOfWordsSplit[j] !=
        arrayOfWordsSplit[arrayOfWordsSplit.length - 1 - j]
      ) {
        stopLoop = true;
        newArray.push(false);
      }
      j++;
    }
    if (stopLoop == false) {
      newArray.push(true);
    }
  }
  return newArray;
}
console.log(isPalindrome(arrayOfWords));
//isPalindrome(arrayOfWords);
//console.log(newArray);
