function rowSumOddNumbers(n) {
  const start = (n * (n - 1)) + 1;
  const numbers = [];

  for(let i = 0; i < n; i++) {
    const newNum = start + (i * 2)
    numbers.push(newNum)
  }

  return numbers.reduce((acc, val) => {
    return acc + val;
  }, 0)
}

console.log(rowSumOddNumbers(42));


// function findStartNum(row) {
//   return (row * (row - 1)) + 1
// }

// function findNumbersInRow(row) {
//   const start = (row * (row - 1)) + 1
//   const numbers = []
//   for(let i = 0; i < row; i++) {
//     const newNum = start + (i * 2)
//     numbers.push(newNum)
//   }
//   return numbers;
// }



