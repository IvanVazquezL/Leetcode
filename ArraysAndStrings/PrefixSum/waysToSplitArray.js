var waysToSplitArray = function(nums) {
    const prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[i - 1]);
    }

    let ways = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (prefixSum[i] >= prefixSum[nums.length - 1] - prefixSum[i]) ways++;
    }

    return ways;
};

var waysToSplitArrayII = function(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    let curr = 0;
    let ways = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        curr += nums[i];
        if (curr >= total - curr) ways++;
    }

    return ways;
}

console.log(waysToSplitArrayII([10,4,-8,7]));
console.log(waysToSplitArrayII([2,3,1,0]));