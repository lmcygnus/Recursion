const array = [0, 1];

function fibs(n) {
  const count = n;
  if (count < 0) return 'OOPS';
  if (count === 0) return 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= count; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}
fibs(6);

function fibsReC(n) {
  if (n < 2) return n;
  array[n] = fibsReC(n - 1) + fibsReC(n - 2);
  return array[n];
}
fibsReC(6);
