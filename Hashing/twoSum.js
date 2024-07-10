var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const summand = target - nums[i];

        if (map.has(summand)) {
            return [
                map.get(summand),
                i
            ]
        }
        map.set(nums[i], i);
    }
    return [-1, -1]
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,2,3], 6));
