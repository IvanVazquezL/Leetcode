var rightSideView = function(root) {
    const queue = [root];

    while (queue.length) {
        const breadth = queue.length

        for (let i = 0; i < breadth; i++) {
            const currentNode = queue.shift();
            console.log(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
    
};