/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const answer = [];
    backtrack([],1,0);
    return answer;

    function backtrack(path, start, current) {
        // Base case: if the path length is k and the sum equals n, add the path to the answer
        if (path.length === k && current === n) {
            answer.push([...path]);
            return;
        }

        // If the current sum exceeds n or we have enough numbers, stop further exploration
        if (current > n || path.length >= k) return;

        for (let i = start; i <= 9; i++) {
            // Add the current number to the path and call backtrack recursively
            path.push(i);
            backtrack(path, i + 1, current + i);
            path.pop();  // Backtrack by removing the last number from the path
        }
    }
};