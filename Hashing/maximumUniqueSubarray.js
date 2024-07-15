var maximumUniqueSubarray = function(nums) {
    let curr = 0;
    let answer = 0;
    let left = 0;
    const map = new Map();

    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        while (map.get(nums[right]) >= 2) {
            curr -= nums[left];
            map.set(nums[left], map.get(nums[left]) - 1);
            left++;
        }

        answer = Math.max(answer, curr);
    }

    return answer;
};

console.log(maximumUniqueSubarray([4,2,4,5,6]));
console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]));
console.log(maximumUniqueSubarray([187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434]))
//16911