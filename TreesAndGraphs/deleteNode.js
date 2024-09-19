var deleteNode = function(root, key) {
    // Base case: If the root is null, return null
    if (root === null) {
        return null;
    }

    // If the key to be deleted is smaller than the
    // root's key, go to the left subtree
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    // If the key to be deleted is greater than the root's 
    // key, go to the right subtree
    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // If the key is the same as the root's key, this is the 
    // node to be deleted
    else {
        // Case 1: Node with only one child or no child
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        // Case 2: Node with two children, 
        // get the in-order successor 
        // (smallest in the right subtree)
        root.val = findMin(root.right);

        // Delete the in-order successor
        root.right = deleteNode(root.right, root.val);
    }

    return root;
};

// Helper function to find the minimum value in a subtree
function findMin(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current.val;
}
