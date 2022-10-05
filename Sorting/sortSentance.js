/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 */

s = "rrr111ggg666hhh777";

function sortSentence(parm1) {
  var sentence = "";

  for (
    let wordPosition = 1;
    wordPosition < numberArray.length + 1;
    wordPosition++
  ) {
    for (j = 0; j < numberArray.length; j++) {
      if (numberArray[j] == wordPosition) {
        if (wordPosition == 1) {
          sentence = sentence + wordsArray[j];
        } else {
          sentence = sentence + " " + wordsArray[j];
        }
      }
    }
  }
  return sentence;
}

//console.log(sortSentence(s));

var numberArray = s.replace(/[^0-9]/g, "").split(" ");
//console.log(numberArray);
var wordsArray = s.replace(/[0-9]/g, "").split("  ");
//console.log(wordsArray)

var newArray = []

for (j = 0; j < numberArray.length; j++) {
  newArray.push(numberArray[j], wordsArray[j])  
}
console.log(newArray)