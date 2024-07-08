var NumArray = function(nums) {
    this.nums = nums;
    this.prefixSum = getPrefixSum(nums);

    function getPrefixSum(nums) {
        const prefixSum = [nums[0]];

        for (let i = 1; i < nums.length; i++) {
            prefixSum.push(nums[i] + prefixSum[i - 1]);
        }

        return prefixSum;
    }
};

NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right] - this.prefixSum[left] + this.nums[left];
};