function nextGreaterElement(nums1, nums2) {
    const stack = []
    const map =  new Map();

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    const nextGreaterElementArray = [];

    for (let i = 0; i < nums1.length; i++) {
        nextGreaterElementArray.push(map.get(nums1[i]));
    }

    return nextGreaterElementArray;
}

function main() {
    console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
    console.log(nextGreaterElement([2,4], [1,2,3,4]));


}

main();