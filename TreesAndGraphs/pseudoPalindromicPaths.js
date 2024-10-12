var pseudoPalindromicPaths = function(root) {
    let ans = 0;
    dfs(root, new Set());
    return ans;

    function dfs(curr, nodes) {
        if (curr === null) return;

        // Toggle the value of the current node in the set
        if (nodes.has(curr.val)) {
            nodes.delete(curr.val);
        } else {
            nodes.add(curr.val);
        }

        // Check if it's a leaf node
        if (curr.left === null && curr.right === null) {
            // If the size of the set is less than or equal to 1, 
            // it means it's a pseudo-palindromic path
            if (nodes.size <= 1) ans++;
        }

        // Recurse for left and right children with a 
        // new set (copy of the current set)
        dfs(curr.left, new Set(nodes));
        dfs(curr.right, new Set(nodes));
    };
};