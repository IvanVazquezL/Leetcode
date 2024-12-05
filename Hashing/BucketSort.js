var topKFrequent = function(nums, k) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const buckets = [[]];

    for (const [num, frequency] of map.entries()) {
        buckets[frequency] = [];
        buckets[frequency].push(num);
    }

    const result = [];

    for (let i = buckets.length; i >= 0; i--) {
        if (buckets[i]?.length > 0) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k);
};

console.log(topKFrequent([1,1,1,1,2,2,3], 2));