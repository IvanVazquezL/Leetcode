function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log(nums);
    return i + 1;
}

console.log(removeDuplicates([1,1,1,3,3,4,5,5]))