var shipWithinDays = function(weights, D) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (feasible(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;

    function feasible(capacity) {
        let days = 1;
        let total = 0;
        for (let weight of weights) {
            total += weight;
            if (total > capacity) {
                total = weight;
                days += 1;
                if (days > D) {
                    return false;
                }
            }
        }
        return true;
    }
};