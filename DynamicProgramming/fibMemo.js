function fib(n, memo = new Map()) {
    if (memo.has(n)) return memo.get(n);
    if (n === 0) return 0;
    if (n <= 2) return 1;

    memo.set(n, fib(n - 1, memo) + fib(n - 2, memo));
    return memo.get(n);
}

console.log(fib(6));