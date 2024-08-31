function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function inorderDFS(node) {
    if (!node) {
        return;
    }

    inorderDFS(node.left);
    console.log(node.val);
    inorderDFS(node.right);

    return;
}

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    inorderDFS(t11);
}

main();