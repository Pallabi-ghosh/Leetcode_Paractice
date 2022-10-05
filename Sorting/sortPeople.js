/* You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

  */

var names = ["Mary", "John", "Emma"];

var heights = [180, 165, 170];

var highestToLowest = [];

function sortPeople(param1, param2) {
  var copyHeights = [];
  for (s = 0; s < param2.length; s++) {
    copyHeights.push(param2[s]);
    //console.log("First poiunter" + " " + copyHeights);
  }
  let byHeight = copyHeights.sort((a, b) => (a > b ? -1 : 1));
  //console.log(byHeight);

  for (i = 0; i < byHeight.length; i++) {
    for (j = 0; j < param2.length; j++) {
      if (byHeight[i] == param2[j]) {
        //console.log("First poiunter" + " " + j);
        highestToLowest.push(param1[j]);
      }
    }
    //console.log("First poiunter" + " " + param1[i] );
    //console.log("First poiunter" + " " + [i] );
  }
  console.log(highestToLowest);
  return highestToLowest;
}

sortPeople(names, heights);
