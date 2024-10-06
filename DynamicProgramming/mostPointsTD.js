var mostPoints = function(questions) {
    const memo = new Map(); 
    
    function dp(index) {
        if (index >= questions.length) {
            return 0;
        }
        
        if (memo.has(index)) {
            return memo.get(index);
        }
        
        const [points, brainpower] = questions[index];
        const solveCurrent = points + dp(index + brainpower + 1);
        const skipCurrent = dp(index + 1);

        const result = Math.max(solveCurrent, skipCurrent);
        memo.set(index, result);
        
        return memo.get(index);
    }
    
    return dp(0);
};