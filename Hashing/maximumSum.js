var maximumSum = function(nums) {
    const map = new Map();
    let answer = -1;

    for (let i = 0; i < nums.length; i++) {
        const sum = sumDigits(nums[i]);

        if (map.has(sum)) {
            answer = Math.max(answer, map.get(sum) + nums[i]);
        }

        map.set(sum, Math.max(map.get(sum) || 0, nums[i]));
    }

    return answer;
};

function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;  // Add the last digit to sum
        num = Math.floor(num / 10);  // Remove the last digit
    }
    return sum;
}


console.log(maximumSum([18,43,36,13,7]));
console.log(maximumSum([10,12,19,14]));