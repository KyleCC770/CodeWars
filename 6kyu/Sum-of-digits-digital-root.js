/*
Digital Root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digital_root(n) {
  let string = n.toString();
  while (string.length > 1) {
    let digitalRootArray = string
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)
      .toString();
    string = digitalRootArray;
  }
  return Number(string);
}
