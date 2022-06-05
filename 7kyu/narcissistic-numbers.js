/*
Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/

function isNarcissistic(n) {
  //your code here
  const arr = String(n)
    .split("")
    .map((str) => Number(str));

  const arrSum = arr
    .map((item) => Math.pow(item, arr.length))
    .reduce((a, b) => a + b, 0);

  return n === arrSum;
}
