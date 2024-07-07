var getCommon = function(nums1, nums2) {
    let indexNums1 = 0;
    let indexNums2 = 0;

    while(indexNums1 <= nums1.length - 1 && indexNums2 <= nums2.length - 1) {
        if (nums1[indexNums1] < nums2[indexNums2]) {
            indexNums1++
        } else if (nums2[indexNums2] < nums1[indexNums1]) {
            indexNums2++;
        } else {
            return nums1[indexNums1];
        }
    }

    return -1;
};

console.log(getCommon([1,2,3], [2,4]));
console.log(getCommon([1,2,3,6], [2,3,4,5]));
