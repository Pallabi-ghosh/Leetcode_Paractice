/* You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. */

accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
  [4, 9],
];

function maximumWealth(accounts) {
  var nextsum = -1;
  for (let i = 0; i < accounts.length; i++) {
    var sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
      //console.log(sum)
      if (sum > nextsum) {
        nextsum = sum;
      }
    }
  }
  return nextsum;
}

console.log(maximumWealth(accounts));
