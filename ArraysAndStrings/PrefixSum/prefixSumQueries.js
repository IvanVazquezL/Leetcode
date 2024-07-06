var prefixSumQueries = function (nums, queries, limit) {
    const prefixSum = [nums[0]];
    const answers = [];

    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[i - 1]);
    }

    for (const [x, y] of queries) {
        const current = prefixSum[y] - prefixSum[x] + nums[x] ;
        answers.push(current < limit);
    }

    return answers;
}

console.log(prefixSumQueries([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13));