//return indecies of vowels

function vowelIndices(word) {
  let vowels = /[aeoiuy]/i;
  let indexArr = [];
  let wordToArr = word.split("");

  wordToArr.forEach((item, index) => {
    if (item.match(vowels)) {
      indexArr.push(index + 1);
    }
  });

  return indexArr;
}
