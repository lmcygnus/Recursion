function fibs(n, array = [0, 1]) {
  const count = n;
  if (count < 0) return 'OOPS';
  if (count === 0) return 0;
  for (let i = 2; i < count; i += 1) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}
console.log(fibs(5)); // [ 0, 1, 1, 2, 3 ]

function fibsReC(n, array = [0, 1]) {
  if (array.length === n) return array;
  array.push(array[array.length - 1] + array[array.length - 2]);
  return fibsReC(n, array);
}
console.log(fibsReC(5)); // [ 0, 1, 1, 2, 3 ]
