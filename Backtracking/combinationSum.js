/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = [];
    backtrack([],0,0);
    return answer;

    function backtrack(path, start, current) {
        if (current === target) {
            answer.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];
            
            if (current + num <= target) {
                path.push(num);
                backtrack(path, i, current + num);
                path.pop();
            }
        }
    }

};