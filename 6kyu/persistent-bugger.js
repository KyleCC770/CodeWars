/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
  let arr = num.toString().split("").map(Number);
  let counter = 0;
  for (let i = 1; arr.length > 1; i++) {
    arr = arr
      .reduce((a, b) => a * b)
      .toString()
      .split("")
      .map(Number);
    counter = i;
  }

  // while (arr.length > 1){
  //
  // }

  return counter;
}
