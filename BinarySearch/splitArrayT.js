function splitArray(nums, m) {
    function feasible(threshold) {
        let count = 1;
        let total = 0;
        for (let num of nums) {
            total += num;
            if (total > threshold) {
                total = num;
                count += 1;
                if (count > m) {
                    return false;
                }
            }
        }
        return true;
    }

    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (feasible(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
