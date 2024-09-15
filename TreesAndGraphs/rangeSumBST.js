/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let rangeSum = 0;

    dfs(root, low, high);

    return rangeSum;

    function dfs(node, low, high) {
        if (!node) return;
        
        const val = node.val;

        if (low <= val && high >= val) {
            rangeSum += val;
        }

        if (low < val) {
            dfs(node.left, low, high);
        }

        if (high > val) {
            dfs(node.right, low, high)
        }
    }
};