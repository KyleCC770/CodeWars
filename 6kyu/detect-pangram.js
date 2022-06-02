/*
Create a function that takes in a string and returns true if it's a pangram
*/
function isPangram(string) {
  //...
  return (
    new Set(
      string
        .toLowerCase()
        .replace(/[^a-z]/gi, "")
        .split("")
    ).size === 26
  );
}
