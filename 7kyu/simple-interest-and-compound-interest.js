/*
Create a function that returns an array of simple interest and compound interest
*/

function interest(P, r, n) {
  // your code here

  let simpleInterest = P + P * r * n;
  let compoundInterest = P;

  for (let i = 0; i < n; i++) {
    compoundInterest += compoundInterest * r;
  }

  return [Math.round(simpleInterest), Math.round(compoundInterest)];
}
