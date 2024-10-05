/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    const answer = [];

    for (let i = 1; i < 10; i++) {
        backtrack(i.toString());
    }

    return answer;

    function backtrack(currentNumber) {
        if (currentNumber.length === n) {
            answer.push(parseInt(currentNumber));
            return; 
        }

        const lastDigit = parseInt(currentNumber[currentNumber.length - 1]);

        for (let i = 0; i < 10; i++) {
            if (Math.abs(i - lastDigit) === k) {
                backtrack(currentNumber + i.toString());
            }
        }
    }
};