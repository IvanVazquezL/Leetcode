var minStartValue = function(nums) {
    let minValue = Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        minValue = Math.min(minValue, sum);
    }

    return minValue >= 0 ? 
        1 : 
        minValue * -1 + 1;
};

console.log(minStartValue([-3,2,-3,4,2]));
console.log(minStartValue([1,2]));
console.log(minStartValue([1,-2,-3]));