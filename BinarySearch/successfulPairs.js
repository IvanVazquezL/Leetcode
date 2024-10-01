/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const answer = [];
    potions.sort((a,b) => a - b);

    for (let i = 0; i < spells.length; i++) {
        const index = binarySearch(potions, success / spells[i]);
        answer.push(potions.length - index);
    }

    return answer;
};

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right)/2);
            
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}