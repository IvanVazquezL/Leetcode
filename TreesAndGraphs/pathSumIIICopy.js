function pathSumIII(root, targetSum) {
    let count = 0;
    const map = new Map();
    preorder(root, 0);

    return count;
    function preorder(node, currentSum) {
        if (!node) return;

        currentSum += node.val;

        if (currentSum === targetSum) {
            count++;
        }

        count += map.get(currentSum - targetSum) || 0;

        map.set(currentSum, (map.get(currentSum) || 0) + 1);


        preorder(node.left, currentSum);
        preorder(node.right, currentSum);

        map.set(currentSum, map.get(currentSum) - 1);
    }
}