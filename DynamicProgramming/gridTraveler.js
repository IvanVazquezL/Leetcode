function gridTraveler(m,n, memo = new Map()) {
    const key = `${m}-${n}`;
    if (memo.has(key)) return memo.get(key);
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    memo.set(
        key,
        gridTraveler(m - 1,n, memo) + gridTraveler(m, n - 1, memo)
    );
    return memo.get(key);
}


console.log(gridTraveler(2,3));