/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high)/2);
        const halvesAreEven = (high - mid) % 2 === 0;

        if (nums[mid + 1] === nums[mid])  {
            if (halvesAreEven) {
                low = mid + 2;
            } else {
                high = mid - 1;
            }
        } else if (nums[mid - 1] === nums[mid]) {
            if (halvesAreEven) {
                high = mid - 2;
            } else {
                low = mid + 1;
            }
        } else {
            return nums[mid];
        }
    }

    return nums[low];
};