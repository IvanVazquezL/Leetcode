function bestSum(targetSum, numbers, memo = new Map()) {
    if (memo.has(targetSum)) return memo.get(targetSum);
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            const combination = [...remainderResult, num];

            if (!shortestCombination || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo.set(targetSum, shortestCombination);
    return memo.get(targetSum);
}

console.log(bestSum(7, [2, 3]))
console.log(bestSum(300, [7, 14]))