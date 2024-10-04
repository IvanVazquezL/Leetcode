/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [];
    backtrack([],0);
    return answer;

    function backtrack(curr, index) {
        if (index > nums.length) {
            return;
        }

        answer.push([...curr]);
        console.log(answer)

        for (let i = index; i < nums.length; i++) {
            curr.push(nums[i]);
            backtrack(curr, i + 1);
            curr.pop();
        }
    } 
};