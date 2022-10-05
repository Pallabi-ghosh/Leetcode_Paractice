var sampleArray = [1, 2, 3, 4, 5];



for (var i = 0; i < sampleArray.length; i++) {
  console.log("First poiunter" + " " + sampleArray[i]); //output- 1,2,3,4,5
  for (var j = i; j < sampleArray.length; j++) {
    console.log("First poiunter2" + " " + sampleArray[j]); //output- 1,1,2,3,4,5,2,2,3,4,5,3,3,4,5,4,4,5,5,5
    for (var k = j; k < sampleArray.length; k++) {
      console.log("First poiunter33" + " " + sampleArray[k]); //output- 1,1,1,2,,3,4,5,2,2,3,4,5,3,3,4,5,4,4,5,5,2,2,2,
    }
  }
}
