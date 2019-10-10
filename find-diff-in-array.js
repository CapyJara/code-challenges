const firstArr = ['abc', 'acb', 'bac', 'foo', 'bca'];
const secondArr = ['aa', 'Aa', 'aaa', 'BbBb'];

function findDiff(arr) {
  const normalized = arr
    .map(str => {
      return str
      .toLowerCase()
      .split('')
      .sort((a, b) => {return a - b});
     })
     .flat();
  


  const obj = {};
  normalized
    .forEach(letter => {
      obj[letter] ? obj[letter]++ : obj[letter] = 1
    });
    
  const sorted = Object
    .entries(obj)
    .sort((a, b) => {
      return a[1] - b[1]
    });

    console.log(sorted[0][0]);

    console.log(arr.includes(sorted[0][0]));
}


findDiff(firstArr);
