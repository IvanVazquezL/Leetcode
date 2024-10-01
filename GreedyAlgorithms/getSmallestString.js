var getSmallestString = function(n, k) {
    const result = [];

    for (let position = n - 1; position >= 0; position--) {
        const add = Math.min(k - position, 26);
        result[position] = String.fromCharCode(96 + add)
        k -= add;
    }

    return result.join("");
};

console.log(getSmallestString(3, 27));