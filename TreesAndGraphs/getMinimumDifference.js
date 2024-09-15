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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const numbers = [];
    let minimumAbsoluteDifference = Infinity;

    dfs(root);

    for (let i = 1; i < numbers.length; i++) {
        minimumAbsoluteDifference = Math.min(
            minimumAbsoluteDifference,
            Math.abs(numbers[i - 1] - numbers[i])
        );
    }

    return minimumAbsoluteDifference;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        numbers.push(node.val);
        dfs(node.right);
    }
};