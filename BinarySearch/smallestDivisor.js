/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);

    while (left <= right) {
        const mid = Math.floor((left + right)/2);

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;

    function check(k) {
        let sum = 0;

        for (const num of nums) {
            sum += Math.ceil(num/k);
        }

        return sum <= threshold;
    }
};