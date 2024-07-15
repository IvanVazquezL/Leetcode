var maxFrequencyElements = function(nums) {
    const map = new Map();
    let maxFrequency = 0;
    let frequency = 0;
    let answer = 0;

    for (const num of nums) {
        frequency = (map.get(num) || 0) + 1;
        map.set(num, frequency);
        maxFrequency = Math.max(maxFrequency, frequency);
    }

    for (const [key, value] of map) {
        if (value === maxFrequency) answer += maxFrequency;
    }

    return answer;
};

console.log(maxFrequencyElements([1,2,2,3,1,4]));
console.log(maxFrequencyElements([1,2,3,4,5]));