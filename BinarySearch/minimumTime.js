/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let left = Math.min(...time);
    let right = Math.max(...time) * totalTrips;

    while (left < right) {
        const mid = Math.floor((left + right)/2);
        let trips = 0;

        for (const t of time) {
            trips += Math.floor(mid/t);
        }

        if (trips < totalTrips) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }   

    return left;
};