var maxAncestorDiff = function(root) {
    return dfs(root, root.val, root.val);

    function dfs(node, min, max) {
        if (!node) {
            return max - min;
        }

        min = Math.min(min, node.val);
        max = Math.max(max, node.val);

        const leftDiff = dfs(node.left, min, max);
        const rightDiff = dfs(node.right, min, max);

        return Math.max(leftDiff, rightDiff);
    }
};