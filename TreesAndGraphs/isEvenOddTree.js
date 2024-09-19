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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) return [];

    const queue = [root];
    let isEven = true;

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

        for (let i = 0; i < levelSize; i++) {
            const result =  isEven ?
                level[i] % 2 !== 0 :
                level[i] % 2 === 0;

            if (!result) {
                return false;
            }
        }

        for (let i = 1; i < levelSize; i++) {
            const result = isEven ? 
                level[i] > level[i - 1] : 
                level[i] < level[i - 1];

            if (!result) {
                return false; 
            }
        }

        isEven = !isEven;
    }

    return true;
};