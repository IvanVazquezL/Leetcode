function solution (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function binarySearch(n) {
        let left = 1;   
        let right = n;  

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                right = mid;  // Try to find a smaller or valid mid.
            } else {
                left = mid + 1;  // Move the left pointer to search in the higher half.
            }
        }

        return left;  // This will be the minimal `k` that satisfies the condition.
    }

};