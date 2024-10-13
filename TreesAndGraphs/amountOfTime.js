var amountOfTime = function(root, start) {
    const map = new Map();
    dfs(root);

    const visited = new Set([start]);
    const queue = [start];
    let minutes = -1;

    while (queue.length) {
        const levelSize = queue.length
        minutes++;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            for (const neighbor of map.get(node)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }   

    return minutes;

    function dfs(node) {
        if (!node) {
            return;
        }

        if (!map.has(node.val)) {
            map.set(node.val, []);
        }

        if (node.left) {
            if (!map.has(node.left.val)) {
                map.set(node.left.val, []);
            }
            map.get(node.val).push(node.left.val);
            map.get(node.left.val).push(node.val);
        }

        if (node.right) {
            if (!map.has(node.right.val)) {
                map.set(node.right.val, []);
            }

            map.get(node.val).push(node.right.val);
            map.get(node.right.val).push(node.val);
        }

        dfs(node.left);
        dfs(node.right);
    }
};