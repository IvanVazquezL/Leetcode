function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var goodNodes = function(root) {
    let numGoodNodes = 0;

    _goodNodes(root, -Infinity);

    return numGoodNodes;

    function _goodNodes(node, maxValue) {
        if (maxValue <= node.val) {
            numGoodNodes++;
        }

        if (node.right !== null) {
            _goodNodes(node.right, Math.max(node.val, maxValue));
        }

        if (node.left !== null) {
            _goodNodes(node.left, Math.max(node.val, maxValue));
        }
    }
};

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(3);
    const t11 = new TreeNode(2, t12, t13);

    console.log(goodNodes(t11));
}

main();