/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    
    const map = new Map();
    map.set("2", ["a", "b", "c"]);
    map.set("3", ["d", "e", "f"]);
    map.set("4", ["g", "h", "i"]);
    map.set("5", ["j", "k", "l"]);
    map.set("6", ["m", "n", "o"]);
    map.set("7", ["p", "q", "r", "s"]);
    map.set("8", ["t", "u", "v"]);
    map.set("9", ["w", "x", "y", "z"]);
    const answer = [];
    backtracking("", 0);
    return answer;

    function backtracking(curr, index) {
        if (curr.length === digits.length) {
            answer.push(curr);
            return;
        }

        for (let i = index; i < digits.length; i++) {
            for (const letter of map.get(digits[i])) {
                curr += letter;
                backtracking(curr, i + 1);
                curr = curr.substring(0, curr.length - 1);
            }
        }

    }
    
};