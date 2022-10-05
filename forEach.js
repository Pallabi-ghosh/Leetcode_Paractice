// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// forEach() calls a provided callbackFn function once for each element in an array in ascending index order.

var bands = [
  [
    "Johnny A",
    "Abbath Doom",
    "Dimebag",
    "Drew Abbott",
    "John Abercrombie",
    "Aaron",
  ],
  [
    "Bob Bennett",
    "George Benson",
    "Peter Bernstein",
    "Chuck Berry",
    "Gene Bertoncini",
  ],
  [
    "Christopher Amott ",
    "Trey Anastasio",
    "Muriel Anderson",
    "Magnus Andersson",
  ],
];

bands.forEach(function (band, index) {
  console.log("something...", index);

  band.forEach(function (member) {
    console.log("something at the point...", member);
  });
});
