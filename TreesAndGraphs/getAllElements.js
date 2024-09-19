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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const arr1 = dfs(root1, []);
    const arr2 = dfs(root2, []);
    const answer = [];

    while (arr1 && arr2 && arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            answer.push(arr1.shift());
        } else {
            answer.push(arr2.shift());
        }
    }

    while (arr1 && arr1.length) {
        answer.push(arr1.shift());
    }

    while (arr2 && arr2.length) {
        answer.push(arr2.shift());
    }

    return answer;
    
    function dfs(node, arr) {
        if (!node) return;

        dfs(node.left, arr);
        arr.push(node.val)
        dfs(node.right, arr);

        return arr;
    }
};