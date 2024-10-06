/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const answer = [];
    const used = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b);
    backtrack([]);
    return answer;

    function backtrack(curr) {
        if (curr.length == nums.length) {
            answer.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            // Skip duplicates: if the current number is the same as the previous number
            // and the previous number hasn't been used in the current permutation
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            curr.push(nums[i]);
            backtrack(curr);
            used[i] = false;
            curr.pop();
        }
    }
};