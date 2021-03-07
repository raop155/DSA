const fib = (n, memo = {}) => {
  if (memo[n]) return memo[n]
  if (n <= 2) return 1
  const result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result
}

const fib_tab = (n) => {
  if (n <= 2) return 1;
  const fibNumbs = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2]
  }
  return fibNumbs[n]
}

console.log(fib(1000));
console.log(fib_tab(1000));
