var maximalNetworkRank = function(n, roads) {
    const degrees = new Array(n).fill(0);
    const connections = new Set();

    for (const [source, destination] of roads) {
        degrees[source]++;
        degrees[destination]++;
        connections.add(`${source}-${destination}`);
        connections.add(`${destination}-${source}`);
    }

    let answer = -Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const connection = connections.has(`${i}-${j}`) ? 1 : 0;
            answer = Math.max(answer, degrees[i] + degrees[j] - connection);
        }
    }

    return answer;
};

function main() {
    console.log(maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]]));
    console.log(maximalNetworkRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]));
    console.log(maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]));
}

main();