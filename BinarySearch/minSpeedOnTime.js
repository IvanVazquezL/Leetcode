/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    if (dist.length > Math.ceil(hour)) {
        return -1;
    }

    let left = 1;
    let right = Math.pow(10,7);

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
console.log({mid})
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;

    function check(k) {
        let time = 0;

        for (const distance of dist) {
            time = Math.ceil(time);
            time += distance/k;
        }

        console.log({
            time,
            hour
        })

        return time <= hour;
    }
};

console.log(minSpeedOnTime([1,3,2], 6))