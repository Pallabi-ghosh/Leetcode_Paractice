//Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
//Save the returned array to a const variable named longFavoriteWords.

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((favoriteWords) => {
  return favoriteWords.length > 7;
});

console.log(longFavoriteWords);
