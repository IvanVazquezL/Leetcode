/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a - b)
    let sum = 0;
    let iceCreams = 0;

    for (const cost of costs) {
        sum += cost;

        if (sum > coins) {
            return iceCreams;
        }

        iceCreams++;
    }

    return iceCreams
};