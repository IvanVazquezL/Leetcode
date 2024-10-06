var findSubsequences = function(nums) {
    const answer = [];
    backtrack([], 0);
    return answer;

    function backtrack(curr, index) {
        if (curr.length >= 2) {
            answer.push([...curr]);
        }

        const usedInLevel = new Set();  // To avoid duplicates in the same recursion level

        for (let i = index; i < nums.length; i++) {
            // Skip duplicates in the same recursion level
            if (usedInLevel.has(nums[i])) continue;

            // Only add if it's forming an increasing subsequence
            if (curr.length === 0 || nums[i] >= curr[curr.length - 1]) {
                usedInLevel.add(nums[i]);
                curr.push(nums[i]);
                backtrack(curr, i + 1);
                curr.pop();
            }
        }
    }
};
