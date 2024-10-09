var bstFromPreorder = function(preorder) {
    let index = 0;
    return buildBST(Infinity);
    
    function buildBST(upperLimit) {
        if (index === preorder.length || preorder[index] > upperLimit) {
            return null;
        }
        
        const rootValue = preorder[index];
        const root = new TreeNode(rootValue);
        index++;
        
        root.left = buildBST(rootValue);
        root.right = buildBST(upperLimit);
        
        return root;
    }
};