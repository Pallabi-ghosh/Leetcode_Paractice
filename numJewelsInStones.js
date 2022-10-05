// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
var jewels = "aA";
var stones = "aAAbbbb";
var s = stones.split("");
var j = jewels.split("");
var count = 0;

var numJewelsInStones = function (jewels, stones) {
  for (i = 0; i < s.length; i++) {
    for (x = 0; x < j.length; x++) {
      if (j[x] === s[i]) {
        count++;
      }
    }
    
  }
  return count;
};

console.log(numJewelsInStones(count));
// console.log(s);
// console.log(j);
