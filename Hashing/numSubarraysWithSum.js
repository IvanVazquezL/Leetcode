var numSubarraysWithSum = function(nums, goal) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;

    for (const num of nums) {
        curr += num;
        ans += counts.get(curr - goal) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }

    return ans;
};

console.log(numSubarraysWithSum([1,0,1,0,1], 2));
console.log(numSubarraysWithSum([0,0,0,0,0], 0));