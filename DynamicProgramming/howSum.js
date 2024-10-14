function howSum(targetSum, numbers, memo = new Map()) {
    if (memo.has(targetSum)) return memo.get(targetSum);
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo.set(targetSum, [...remainderResult, num]);
            return memo.get(targetSum);
        }
    }

    memo.set(targetSum, null);
    return memo.get(targetSum);
}

console.log(howSum(7, [2, 3]))
console.log(howSum(300, [7, 14]))