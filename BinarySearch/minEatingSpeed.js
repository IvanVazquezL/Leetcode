/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        console.log({
            left,
            right,
            mid
        })
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;

    function check(k) {
        let hours = 0;

        for (const bananas of piles) {
            hours += Math.ceil(bananas/k);
            console.log({ceil: Math.ceil(bananas/k)})

        }
        console.log({hours})

        return hours <= h;
    }
};

console.log(minEatingSpeed([3,6,7,11], 8))