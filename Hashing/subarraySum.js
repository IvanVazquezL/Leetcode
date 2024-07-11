var subarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1); // [] its sum is 0
    let answer = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        answer += (map.get(curr - k) || 0);
        map.set(curr, (map.get(curr) || 0) + 1);
    }

    return answer;
};

console.log(subarraySum([1,1,1], 2));
console.log(subarraySum([1,2,3], 3));
