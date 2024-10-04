var maximumCandies = function(candies, k) {
    let left = 0;
    let right = Math.max(...candies);

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        let piles = 0;

        for (const pile of candies) {
            piles += Math.floor(pile/mid);
        }

        if (piles >= k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};