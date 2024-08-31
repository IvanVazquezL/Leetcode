function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function depthFirstSearch(node) {
    if (!node) {
        return;
    }

    depthFirstSearch(node.left);
    depthFirstSearch(node.right);

    return;
}

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    depthFirstSearch(t11);
}

main();