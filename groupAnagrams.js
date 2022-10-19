/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 */

var strs = ["eat"];

var newString = [];

function groupAnagrams(string) {
  for (i = 0; i < string.length; i++) {
    //console.log("First poiunter" + " " + string[i]);
    var splitStr = string[i].split("");
    //console.log(splitStr);
  }
  for (j = 0; j < splitStr.length; j++) {
    console.log(splitStr[j]);
    var sortStr = splitStr.sort();
    //console.log(sortStr);
    for (s = 0; s < sortStr.length; s++) {
      if (splitStr[j] == sortStr[s]) {
        //console.log(splitStr[j]);
        newString.push(splitStr);
      }
    }
  }
  console.log(newString);
}

groupAnagrams(strs);
