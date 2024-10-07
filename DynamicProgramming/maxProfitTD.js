var maxProfit = function(k, prices) {
    let memo = [];
    for (let i = 0; i < prices.length; i++) {
        memo.push([]);
        for (let j = 0; j < 2; j++) {
            memo[i].push(new Array(k + 1).fill(-1));
        }
    }
    
    return dp(0, 0, k);

    function dp(index, holding, remain) {
        if (index == prices.length || remain == 0) {
            return 0;
        }
        
        if (memo[index][holding][remain] != -1) {
            return memo[index][holding][remain];
        }
        
        let answer = dp(index + 1, holding, remain);
        if (holding) {
            answer = Math.max(answer, prices[index] + dp(index + 1, 0, remain - 1));
        } else {
            answer = Math.max(answer, -prices[index] + dp(index + 1, 1, remain));
        }
        
        memo[index][holding][remain] = answer;
        return answer;
    }
};