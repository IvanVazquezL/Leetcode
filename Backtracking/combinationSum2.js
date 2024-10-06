var combinationSum2 = function(candidates, target) {
    const answer = [];
    candidates.sort((a, b) => a - b);  // Sort to handle duplicates
    backtrack([], 0, 0);
    return answer;

    function backtrack(path, start, current) {
        if (current === target) {
            answer.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            const num = candidates[i];
            if (current + num <= target) {
                path.push(num);
                backtrack(path, i + 1, current + num);  // Move to the next index (i + 1)
                path.pop();
            }
        }
    }
};
