var getAverages = function(nums, radius) {
    const answers = [];

    if (radius < 0) {
        for (let i = 0; i < nums.length; i++) {
            answers.push(-1);
        }

        return answers;
    }

    const prefixSum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[i - 1]);
    }

    const length = radius * 2 + 1;
    const center = radius + 1;
    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
        if (right - left + 1 < center || right + center > nums.length) {
            answers.push(-1)
        } else if (right - left + 1 === center) {
            const average = Math.floor((prefixSum[right + radius] - prefixSum[left] + nums[left]) / length);
            answers.push(average);
            left++;
        }

        right++;
    }

    return answers;
};

var getAveragesII = function(nums, radius) {
    const answers = [];
    const windowSize = radius * 2 + 1;

    for (let i = 0; i < nums.length; i++) {
        answers.push(-1);
    }

    if (nums.length < windowSize) return answers;
    if (radius < 0) return answers;

    let windowSum = 0;

    for (let i = 0; i < windowSize - 1; i++) {
        windowSum += nums[i];
    }

    for (let i = radius; i < nums.length - radius; i++) {
        windowSum += nums[i + radius];
        answers[i] = Math.floor(windowSum / windowSize);
        windowSum -= nums[i - radius];
    }
    
    return answers;
}


console.log(getAveragesII([7,4,3,9,1,8,5,2,6], 3));
//[-1,-1,-1,5,4,4,-1,-1,-1]
console.log(getAveragesII([100000], 0))
console.log(getAveragesII([8], -1))