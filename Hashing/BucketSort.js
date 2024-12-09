/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const buckets = [[]];

    for (const [number, frequency] of map.entries()) {
        if (!buckets[frequency]) buckets[frequency] = []
        buckets[frequency].push(number);
    }

    const results = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i]?.length > 0) results.push(...buckets[i]);
    }

    return results.slice(0, k);
};