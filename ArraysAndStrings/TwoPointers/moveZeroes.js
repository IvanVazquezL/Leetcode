var moveZeroes = function (nums) {
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (left !== i) {
            if (nums[i] !== 0) {
                const temp = nums[left];
                nums[left] = nums[i];
                nums[i] = temp;
                left += 1;
            }
        }
    }

    console.log(nums)
}

moveZeroes([0,1,0,3,12]);
moveZeroes([0]);