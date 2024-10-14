function countConstruct(target, wordBank, memo = new Map()) {
    if (memo.has(target)) return memo.get(target);
    if (target === "") return 1;

    let totalCount = 0;

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(
                target.slice(word.length),
                wordBank,
                memo
            );
            totalCount += numWaysForRest;
        }
    }

    memo.set(target,totalCount);
    return totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));