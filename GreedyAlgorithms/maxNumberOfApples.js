/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    weight.sort((a,b) => a - b);
    let maxApples = 0
    let currentWeight = 0

    for (const appleWeight of weight) {
        currentWeight += appleWeight;

        if (currentWeight > 5000) {
            break;
        }

        maxApples += 1;
    }

    return maxApples;
};