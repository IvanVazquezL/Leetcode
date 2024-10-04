var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = Math.floor(nums.reduce((sum,num) => sum + num, 0));

    while (left < right) {
        const mid = Math.floor((left + right)/2);
        let currentSum = 0;
        let subarrays = 1;

        for (const num of nums) {
            currentSum += num;

            if (currentSum > mid) {
                subarrays++;
                currentSum = num;
            }
        }

        if (subarrays > k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};