/*
Create a function that checks if a string ends with a certain letter
*/

function solution(str, ending) {
  let endsWithStr = str.slice(-ending.length);

  return endsWithStr.includes(ending);
}
