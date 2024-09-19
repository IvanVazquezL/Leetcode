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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];

    const answer = [];
    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        let currentSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            currentSum += currentNode.val;

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        answer.push(currentSum/levelSize)
    }

    return answer;
};