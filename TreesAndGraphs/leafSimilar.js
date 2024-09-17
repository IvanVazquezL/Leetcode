/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if (!root1 || !root2) {
        return false;
    }

    const leafValueSequence1 = dfs(root1, []);
    const leafValueSequence2 = dfs(root2, []);

    return leafValueSequence1 === leafValueSequence2;

    function dfs(node, sequence) {
        if (!node) {
            return;
        }

        dfs(node.left, sequence);

        if (node.left === null && node.right === null) {
            sequence.push(node.val);
        }

        dfs(node.right, sequence);

        return sequence.join('-');
    }
};