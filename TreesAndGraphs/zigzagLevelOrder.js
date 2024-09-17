var zigzagLevelOrder = function(root) {
    if (!root) return [];

    const queue = [root];
    const answer = [];

    while (queue.length) {
        const levelSize = queue.length;
        answer.push(queue);

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    console.log(answer);
};

zigzagLevelOrder();