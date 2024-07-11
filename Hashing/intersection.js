var intersection = function(nums) {
    const map = new Map();
    const answer = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            const integer = nums[i][j];
            const repetitions = map.has(integer) ? map.get(integer) + 1 : 1;
            map.set(integer, repetitions);

            if (i === nums.length - 1 && repetitions === nums.length) {
                answer.push(integer);
            }
        }
    }

    return answer.sort((a,b) => a - b);
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));
console.log(intersection([[1,2,3],[4,5,6]]));