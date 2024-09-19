function pathSum(root, targetSum) {
    let count = 0; // Count of paths with sum k
    // HashMap to store prefix sums
    let map = new Map(); 
    preorder(root, 0);
    return count;

    function preorder(node, currentSum) {
        if (node === null) return;

        // The current prefix sum
        currentSum += node.val;

        // Check if the current sum equals the target
        if (currentSum === targetSum) {
            count++;
        }

        // Add the number of occurrences of 
        // (currSum - k) to count
        count += map.get(currentSum - targetSum) || 0;

        // Store the current prefix sum in the hashmap
        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        preorder(node.left, currentSum);
        preorder(node.right, currentSum);

        // Remove the current sum from the map after 
        // the subtree is processed
        map.set(currentSum, map.get(currentSum) - 1);
    }
}
