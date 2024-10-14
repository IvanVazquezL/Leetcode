function canConstruct(target, wordBank, memo = new Map()) {
    if (memo.has(target)) return memo.get(target);
    if (target === "") return true;

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix,wordBank,memo)) {
                memo.set(target, true);
                return true;
            }
        }
    }

    memo.set(target,false);
    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));