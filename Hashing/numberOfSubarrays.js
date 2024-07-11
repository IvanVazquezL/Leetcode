var numberOfSubarrays = function(nums, k) {
    const map = new Map();
    map.set(0, 1); // [] its sum is 0
    let answer = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) curr += 1;
        answer += (map.get(curr - k) || 0);
        map.set(curr, (map.get(curr) || 0) + 1);
    }

    return answer;
};

console.log(numberOfSubarrays([1,1,2,1,1], 3));
console.log(numberOfSubarrays([2,4,6], 1));