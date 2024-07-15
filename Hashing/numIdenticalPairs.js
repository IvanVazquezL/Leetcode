var numIdenticalPairs = function(nums) {
    const map = new Map();
    let identicalPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (const value of map.values()) {
        identicalPairs += Math.floor(value * (value - 1) / 2);
    }

    return identicalPairs;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));
