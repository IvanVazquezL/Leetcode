/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function(stations, k) {
    let low = 0;
    let high = 1e8;

    while (high - low > 1e-6) {
        let mid = (low + high)/2;

        if (possible(mid, stations, k)) {
            high = mid;
        } else {
            low = mid;
        }
    }

    return low;

    function possible(d, stations, k) {
        let used = 0;

        for (let i = 0; i < stations.length - 1; i++) {
            used += Math.floor((stations[i + 1] - stations[i])/d);
        }

        return used <= k;
    }
};