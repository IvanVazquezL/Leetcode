function numRollsToTarget(dice, faces, target, memo = new Map()) {
    const key = `${dice}-${target}`;
    if (memo.has(key)) return memo.get(key);
    if (dice === 0 && target === 0) return 1;
    if (dice === 0) return 0;
    if (target < 0) return 0;

    let result = 0;
    const mod = 1e9 + 7;

    for (let face = 1; face <= faces; face++) {
        result = (result + numRollsToTarget(dice - 1, faces, target - face, memo)) % mod;
    }

    memo.set(key, result);
    return memo.get(key);
}
