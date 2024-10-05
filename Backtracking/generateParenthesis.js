/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];
    backtracking(answer, "", 0, 0, n);
    return answer;

    function backtracking(answer, currentString, leftCount, rightCount, n) {
        if (currentString.length === 2 * n) {
            answer.push(currentString);
            return;
        }

        if (leftCount < n) {
            currentString += "(";
            backtracking(answer, currentString, leftCount + 1, rightCount, n);
            currentString = currentString.slice(0,-1);
        }

        if (leftCount > rightCount) {
            currentString += ")";
            backtracking(answer, currentString, leftCount, rightCount + 1, n);
            currentString = currentString.slice(0,-1);
        }
    }
    
};