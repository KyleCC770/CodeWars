// complete the function to separate camel case word into distinctive words
function solution(string) {
  let regex = /(?=[A-Z])/;

  return string.split(regex).join(" ");
}
