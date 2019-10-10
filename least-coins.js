function makeChange(x) {
x = x * 100;
let i = 0;
let coins = 0;
let coinDenominations = [25, 10, 5, 1];

while(x > 0) {
  console.log(x);
  coins += Math.floor(x / coinDenominations[i]);
  x = x % coinDenominations[i];
  i++;
}
return coins;
}

console.log(makeChange(5.37));

// proud i made this O^1
