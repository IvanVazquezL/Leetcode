/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = new Map();
    return dp(cost.length);

    function dp(index) {
        if (index <= 1) {
            return 0;
        }

        if (memo.has(index)) {
            return memo.get(index);
        }

        memo.set(index, Math.min(dp(index - 1) + cost[index -1], dp(index - 2) + cost[index - 2]));
        return memo.get(index);
    }
};