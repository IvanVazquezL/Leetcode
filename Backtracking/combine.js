/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const answer = [];
    backtracking([], 1);
    return answer;
    
    function backtracking(curr, number) {
        if (curr.length == k) {
            answer.push([...curr]);
            return;
        }

        for (let i = number; i <= n; i++) {
            curr.push(i);
            backtracking(curr, i + 1);
            curr.pop();
        }
    }
};