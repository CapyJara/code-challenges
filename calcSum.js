function calcSum(num1, num2) {
  const arr1 = [];
  const arr2 = [];

  arr1.length = num1;
  arr2.length = num2;

  const finArr = [...arr1, ...arr2];

  return finArr.length;
}

console.log(calcSum(3, 4));
