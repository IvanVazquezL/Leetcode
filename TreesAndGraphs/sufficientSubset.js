var sufficientSubset = function(root, limit) {
    return dfs(root, limit);
    // Time Complexity: O(N) - We visit every node once.
    // Space Complexity: O(H) - The maximum depth of the recursion stack.
};

function dfs(node, limit) {
    // Base case: if the current node is null, return null
    if (!node) {
        return null;
    }

    // If the current node is a leaf node, check its value against the limit
    if (!node.left && !node.right) {
        return node.val < limit ? null : node; // Remove if insufficient
    }

    // Recursively call DFS for the left and right children with the updated limit
    node.left = dfs(node.left, limit - node.val);
    node.right = dfs(node.right, limit - node.val);

    // After recursion, check if this node has become a leaf node (both children are null)
    if (!node.left && !node.right) {
        return null; // This node is insufficient and should be removed
    }

    // Return the current node if it has at least one sufficient child
    return node; 
}