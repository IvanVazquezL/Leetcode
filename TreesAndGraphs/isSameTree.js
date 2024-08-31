function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }

    if (p === null || q === null) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }

    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    const t22 = new TreeNode(1);
    const t23 = new TreeNode(3);
    const t21 = new TreeNode(2, t22, t23);

    console.log(isSameTree(t11, t21));
}

main();