var longestZigZag = function(root) {
    let pathLength = 0;
    dfs(root, false, 0);
    dfs(root, true, 0);
    return pathLength;

    function dfs(node, goLeft, steps) {
        if (!node) return;

        pathLength = Math.max(pathLength, steps);

        if (goLeft) {
            dfs(node.left, false, steps + 1);
            dfs(node.right, true, 1)
        } else {
            dfs(node.left, false, 1);
            dfs(node.right, true, steps + 1);
        }
    }
};