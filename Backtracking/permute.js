/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const answer = [];
    backtrack([]);
    return answer;

    function backtrack(curr) {
        if (curr.length == nums.length) {
            answer.push([...curr]);
            return;
        }

        for (const num of nums) {
            if (!curr.includes(num)) {
                curr.push(num);
                backtrack(curr);
                curr.pop();
            }
        }
    }
};