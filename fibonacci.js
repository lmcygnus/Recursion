function fibs(n) {
  const count = n;
  if (count < 0) return 'OOPS';
  if (count === 0) return 0;
  const fib = [0, 1];
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= count; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
fibs(6);

const array = [0, 1];

function fibsReC(n) {
  if (n < 2) return n;
  array[n] = fibsReC(n - 1) + fibsReC(n - 2);
  return array[n];
}
fibsReC(6);
