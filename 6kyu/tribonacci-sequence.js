/*
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
*/

function tribonacci(signature, n) {
  //your code here
  if (n > 0) {
    if (n < 4) {
      return signature.slice(0, n);
    } else {
      for (let i = 3; i < n; i++) {
        signature.push(signature.slice(i - 3, i).reduce((a, b) => a + b));
      }
      return signature;
    }
  } else {
    return [];
  }
}
