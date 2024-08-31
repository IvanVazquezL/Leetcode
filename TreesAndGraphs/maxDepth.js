function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = maxDepth(root.left);
    const rightHeight = maxDepth(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
};

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    console.log(maxDepth(t11));
}

main();