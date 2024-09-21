/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if (k === 0) return [target.val];

    const graph = new Map();
    dfs(root);

    const queue = [target.val];
    const seen = new Set();
    seen.add(target.val);
    let distance = 0;

    while (queue.length) {
        const levelSize = queue.length;
        distance++;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            for (const neighbor of graph.get(currentNode)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        if (distance === k) return queue;
    }

    return [];

    function dfs(node) {
        if (!node) return;

        const rootVal = node.val;

        if (!graph.has(rootVal)) {
            graph.set(rootVal, []);
        }

        if (node.left) {
            const val = node.left.val;
            if (!graph.has(val)) {
                graph.set(val, []);
            }

            graph.get(val).push(rootVal);
            graph.get(rootVal).push(val);
        }

        if (node.right) {
            const val = node.right.val;
            if (!graph.has(val)) {
                graph.set(val, []);
            }

            graph.get(val).push(rootVal);
            graph.get(rootVal).push(val);
        }

        dfs(node.left);
        dfs(node.right);
    }
};