var minSubArrayLen = function(target, nums) {
    let left = 0;
    let answer = Infinity;
    let curr = 0;

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];

        while (curr >= target) {
            answer = Math.min(answer, right - left + 1);
            curr -= nums[left];
            left++;
        }
    }

    return answer === Infinity ? 0 : answer;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));