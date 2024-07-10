let findNumbers = nums => {
    let ans = [];
    let numsSet = new Set(nums);

    for (const num of numsSet) {
        if (!numsSet.has(num + 1) && !numsSet.has(num - 1)) {
            ans.push(num);
        }
    }

    return ans;
}