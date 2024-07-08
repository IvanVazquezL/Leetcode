var pivotIndex = function(nums) {
    const prefixSum = [nums[0]];
    let pivotIndex = -1;

    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[i - 1]);
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i !== 0) left = prefixSum[i - 1];
        if (i === nums.length - 1) {
            right = 0;
        } else {
            right = prefixSum[nums.length - 1] - prefixSum[i];
        }

        if (left === right) {
            pivotIndex = i;
            break;
        }
    }

    return pivotIndex;
};

var pivotIndexII = function(nums) {
    let totalSum = 0;
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
    }

    return -1;
};

console.log(pivotIndexII([1,7,3,6,5,6]));
console.log(pivotIndexII([1,2,3]));
console.log(pivotIndexII([2,1,-1]));