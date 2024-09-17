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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const paths = [];

    dfs(root, targetSum, []);

    return paths;

    function dfs(node, remainingSum, pathNodes) {
        if (!node) return;

        pathNodes.push(node.val);

        if (
            remainingSum === node.val &&
            node.left === null &&
            node.right === null
        ) {
            paths.push([...pathNodes])
        } else {
            dfs(
                node.left,
                remainingSum - node.val,
                pathNodes
            );
            dfs(
                node.right,
                remainingSum - node.val,
                pathNodes
            )
        }

        pathNodes.pop();
    }
};