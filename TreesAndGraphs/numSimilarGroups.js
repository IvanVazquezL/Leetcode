var numSimilarGroups = function(strs) {
    const n = strs.length;
    const adj = new Map();
    
    function bfs(node, adj, visit) {
        const queue = [node];
        visit[node] = true;

        while (queue.length > 0) {
            node = queue.shift(); 
            if (!adj.has(node)) {
                continue;
            }
            for (const neighbor of adj.get(node)) {
                if (!visit[neighbor]) {
                    visit[neighbor] = true;
                    queue.push(neighbor); 
                }
            }
        }
    }

    function isSimilar(a, b) {
        let diff = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff++;
            }
        }
        return diff === 0 || diff === 2;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) {
                if (!adj.has(i)) adj.set(i, []);
                if (!adj.has(j)) adj.set(j, []);
                adj.get(i).push(j);
                adj.get(j).push(i);
            }
        }
    }

    const visit = new Array(n).fill(false);
    let count = 0;

    // Count the number of connected components
    for (let i = 0; i < n; i++) {
        if (!visit[i]) {
            bfs(i, adj, visit);
            count++;
        }
    }

    return count;
};
