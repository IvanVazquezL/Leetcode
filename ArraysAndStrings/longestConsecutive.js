function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let maxLength = 0;

    for (const num of nums) {
        // Check if it is the start of a sequence
        if (!numSet.has(num - 1)) {  
            let currentNum = num;
            let currentLength = 1;

            // Step 3: Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}
