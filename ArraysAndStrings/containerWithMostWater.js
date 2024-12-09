function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const area = width * Math.min(heights[left], heights[right]);
        maxArea = Math.max(maxArea, area);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea([1,7,2,5,4,7,3,6]));
console.log(maxArea([2,2,2]));