var longestSubarray = function(nums, limit) {
    let increasing = [];
    let decreasing = [];
    let left = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        while (increasing.length && increasing[increasing.length - 1] > nums[right]) {
            increasing.pop();
        }

        while (decreasing.length && decreasing[decreasing.length - 1] < nums[right]) {
            decreasing.pop();
        }

        increasing.push(nums[right]);
        decreasing.push(nums[right]);

        while (decreasing[0] - increasing[0] > limit) {
            if (nums[left] == decreasing[0]) {
                decreasing.shift();
            }
            if (nums[left] == increasing[0]) {
                increasing.shift();
            }
            left++;
        }
        
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};

function main() {
    console.log(longestSubarray([8,2,4,7], 4));
    console.log(longestSubarray([10,1,2,4,7,2], 5));
    console.log(longestSubarray([4,2,2,2,4,4,2,2], 0));

}

main();