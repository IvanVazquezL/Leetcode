var findLucky = function(arr) {
    const map = new Map();
    let answer = -1;

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (key === value) answer = Math.max(answer, key);
    }

    return answer;
};

console.log(findLucky([2,2,3,4]));
console.log(findLucky([1,2,2,3,3,3]));
console.log(findLucky([2,2,2,3,3]));