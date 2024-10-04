/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = Math.floor(weights.reduce((sum,weight) => sum + weight, 0));

    while (left < right) {
        const mid = Math.floor((left + right)/2);
        let currentWeight = 0;
        let daysTaken = 1;

        for (const weight of weights) {
            currentWeight += weight;

            if (currentWeight > mid) {
                daysTaken++;
                currentWeight = weight;
            }
        }

        if (daysTaken > days) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};