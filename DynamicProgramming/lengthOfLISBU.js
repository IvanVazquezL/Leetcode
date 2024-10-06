var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log({
                                    i,
                    j,
                    val: `${nums[i]} > ${nums[j]} = ${nums[i] > nums[j]}`,
            })
            if (nums[i] > nums[j]) {
                console.log({
                    i,
                    j,
                    numsi:nums[i],
                    numsj:nums[j],
                    dpi: dp[i],
                    dpj: dp[j] + 1,
                })
                dp[i] = Math.max(dp[i], dp[j] + 1);
                console.log(dp)
            }
        }
    }

    console.log(dp)
    return Math.max(...dp);
};