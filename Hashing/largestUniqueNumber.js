var largestUniqueNumber = function(nums) {
    const numsFrequency = new Map();
    let answer = -1;

    for (const num of nums) {
        numsFrequency.set(num, (numsFrequency.get(num) || 0) + 1);
    }

    for (const [key, value] of numsFrequency) {
        if (value === 1) answer = Math.max(answer, key);
    }

    return answer;
};

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]));
console.log(largestUniqueNumber([9,9,8,8]));