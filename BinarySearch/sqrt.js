var mySqrt = function(x) {
    let left = 0;
    let right = x + 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (condition(mid)) {
            right = mid;  // Try to find a smaller or valid mid.
        } else {
            left = mid + 1;  // Move the left pointer to search in the higher half.
        }
    }
    return left - 1;  // This will be the minimal `k` that satisfies the condition.

    function condition(value) {
        return value * value > x;
    }
};