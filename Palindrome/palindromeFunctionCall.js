var arrayOfWords = ["arnab", "pallabi", "sonos", "cat", "noon", "mouse"];

// expected Output = [false, false, true, false, true, false]

function palindrome(str) {
  var sum = str.split("");
  //console.log(sum)
  for (i = 0; i < sum.length; i++) {
    //console.log("First poiunter" + " " +(sum.length - 1 -i));
    if (sum[i] != sum[sum.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

var newArray = [];

function palArray(param1) {
  var result = "";
  for (j = 0; j < param1.length; j++) {
    //console.log(param1[j])
    result = palindrome(param1[j]);
    //console.log(result)
    newArray.push(result);
    //console.log(newArray);
  }
  return newArray;
}
palArray(arrayOfWords);
//console.log(palArray(arrayOfWords));
console.log(newArray);