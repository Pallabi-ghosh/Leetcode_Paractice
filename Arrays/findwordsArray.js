// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

words = ["hello", "alaska", "dad", "peace"];

// const lower = words.map((element) => {
//   return element.toLowerCase();
// });
//console.log(lower)

function findWords(param1) {
  var keyWords = ["asdfghjkl", "zxcvbnm", "qwertyuiop"];

  var newArray = [];
  for (i = 0; i < param1.length; i++) {
    var wordsSplit = param1[i].split("");
    //console.log("First poiunter" + " " + wordsSplit);
    for (j = 0; j < keyWords.length; j++) {
      var keyWordsSplit = keyWords[j].split("");
      //console.log("First poiunter" + " " + keyWordsSplit);
      let isWordPresent = true;
      for (s = 0; s < wordsSplit.length; s++) {
        let isLetterPresent = false;
        //console.log("First poiunter" + " " + param1);
        for (x = 0; x < keyWordsSplit.length; x++) {
          //console.log("First poiunter2" + " " + keyWordsSplit);
          if (wordsSplit[s] === keyWordsSplit[x]) {
            isLetterPresent = true;
          }
        }
        if (isLetterPresent == false) {
          //console.log("Hi")
          isWordPresent = false;
        }
      }

      if (isWordPresent == true) {
        //console.log("Hi");
        newArray.push(wordsSplit.join(""));
        //console.log(wordsSplit);
      }
    }
  }
  //console.log(newArray);
  return newArray;
}
//findWords(words);
console.log(findWords(words));
