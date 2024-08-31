function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function hasPathSum(root, sum) {
    if (!root) return false;

    sum -= root.val;

    if (hasReachedALeaf()) {
        return sum === 0;
    }

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
    
    function hasReachedALeaf() {
        return !root.left && !root.right;
    }
}



function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    console.log(hasPathSum(t11, 5));
}

main();