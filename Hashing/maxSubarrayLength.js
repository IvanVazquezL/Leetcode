var maxSubarrayLength = function(nums, k) {
    const map = new Map();
    let left = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        console.log({
            left,
            right,
            array: nums.slice(left, right)
        })
        while (map.get(nums[right]) > k) {
            map.set(nums[left], map.get(nums[left]) - 1);
            left++;
        }

        answer = Math.max(answer, right - left + 1);
        console.log(answer);
    }

    return answer;
};

//console.log(maxSubarrayLength([1,2,3,1,2,3,1,2], 2));
//console.log(maxSubarrayLength([1,2,1,2,1,2,1,2], 1));
//console.log(maxSubarrayLength([5,5,5,5,5,5,5], 4));
console.log(maxSubarrayLength([1,2,2,1,3], 1));
