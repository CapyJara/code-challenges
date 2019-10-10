function findMissingLetter(arr) {
  const numArr = arr.map(letter => letter.charCodeAt())
  for(let i = 0; i < arr.length; i++) {
    if(numArr[i] !== (numArr[i + 1] - 1)) {
      return String.fromCharCode(numArr[i] + 1);
    }
  }
}


findMissingLetter(["a","b","c","d","f"]);
// findMissingLetter(["O","Q","R","S"]);
console.log(findMissingLetter(["a","b","c","d","f"]));
