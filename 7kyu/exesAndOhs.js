/*
create a function that returns "true" if a string has the same number of X and O (case insensitive) or "false" if the number isn't the same. 
*/

function XO(str) {
  //code here

  let countX = (str.match(/x/gi) || []).length;
  let countO = (str.match(/o/gi) || []).length;

  return countX === countO ? true : false;
}
