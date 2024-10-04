/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
    price.sort((a,b) => a - b);

    let left = 0;
    let right = price[price.length - 1] - price[0];

    while (left < right) {
        let mid = Math.floor((left + right + 1)/2);

        console.log({
            left,
            right,
            mid,
            canPick: canPick(mid)
        })

        if (canPick(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;

    function canPick(tastiness) {
        let count = 1;
        let lastSelected = price[0];

        for (let i = 1; i < price.length; i++) {
            if (price[i] - lastSelected >= tastiness) {
                count++;
                lastSelected = price[i];
            }
            if (count >= k) return true;
        }
        return false;
    }
};