function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of nums) {
        let consecutive = 1;

        if (!set.has(num - 1)) {
            let currentNum = num;
            while (set.has(currentNum)) {
                longest = Math.max(longest, consecutive);
                consecutive += 1;
                currentNum += 1;
            }
        }
    }

    return longest;
}

console.log(longestConsecutive([2,20,4,10,3,4,5]));
console.log(longestConsecutive([0,3,2,5,4,6,1,1]));

