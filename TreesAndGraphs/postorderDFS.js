function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function postorderDFS(node) {
    if (!node) {
        return;
    }

    postorderDFS(node.left);
    postorderDFS(node.right);
    console.log(node.val);

    return;
}

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    postorderDFS(t11);
}

main();