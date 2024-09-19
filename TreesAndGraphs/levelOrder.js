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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const levels = [];
    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;

        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            level.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        levels.push(level);
    }

    return levels;
};