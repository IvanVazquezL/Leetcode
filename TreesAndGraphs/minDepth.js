var minDepth = function(root) {
    if (!root) return 0;

    const queue = [root];
    let minimumDepth = 0

    while (queue.length) {
        const levelSize = queue.length;
        minimumDepth++;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            if (currentNode.left === null && currentNode.right === null) {
                return minimumDepth;
            }

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    return 0;
};