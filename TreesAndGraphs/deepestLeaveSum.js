var deepestLeavesSum = function(root) {
    if (!root) return 0;

    const queue = [root];
    let sum = 0;

    while (queue.length) {
        const levelSize = queue.length;
        sum = 0;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            sum += currentNode.val;

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    } 

    return sum;
};