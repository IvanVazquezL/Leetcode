var sumOfUnique = function(nums) {
    let answer = 0;
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value === 1) answer += key;
    }

    return answer;
};

console.log(sumOfUnique([1,2,3,2]));
console.log(sumOfUnique([1,1,1,1,1]));
console.log(sumOfUnique([1,2,3,4,5]));
