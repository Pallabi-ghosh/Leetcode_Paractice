// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

var sentences = ["please wait", "continue to fight", "continue to win"]

// console.log(sentences[0].split(' ').length);
// console.log(sentences[1].split(' ').length);
// console.log(sentences[2].split(' ').length);


var longestWord = 0;

function mostWordsFound(param1) {
  for (i = 0; i < param1.length; i++) {
    var leng = param1[i].split(" ").length;
    if (leng > longestWord) {
        longestWord = leng;
      }
  }
  //console.log(longestWord)
  return longestWord;
}

console.log(mostWordsFound(sentences));
