var numJewelsInStones = function(jewels, stones) {
    const set = new Set(jewels);
    let answer = 0;

    for (const stone of stones) {
        if (set.has(stone)) answer += 1;
    }

    return answer;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));