function canSum(targetSum, numbers, memo = new Map()) {
    if (memo.has(targetSum)) return memo.get(targetSum);
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo.set(targetSum, true);
            return true;
        }
    }

    memo.set(targetSum, false);
    return false;
}

console.log(canSum(7, [2, 3]))
console.log(canSum(300, [7, 14]))