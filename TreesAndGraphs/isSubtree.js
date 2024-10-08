var isSubtree = function(root, subRoot) {
    if (root === null) {
        return false;
    }

    // Check if the "tree rooted at root" 
    // is identical to "tree rooted at subRoot"
    if (isIdentical(root, subRoot)) {
        return true;
    }

    // If not, check for "tree rooted at root.left" 
    // and "tree rooted at root.right"
    // If either of them returns true, return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isIdentical = function(node1, node2) {
    // If any of the nodes is null, then both must be null
    if (node1 === null || node2 === null) {
        return node1 === null && node2 === null;
    }

    // If both nodes are non-empty, then they are identical only if
    // 1. Their values are equal
    // 2. Their left subtrees are identical
    // 3. Their right subtrees are identical
    return node1.val === node2.val &&
           isIdentical(node1.left, node2.left) &&
           isIdentical(node1.right, node2.right);
};
