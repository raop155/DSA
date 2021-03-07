const fib = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result
}

console.log(fib(1000));
console.log(fib(1000));