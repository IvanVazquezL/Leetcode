var findSmallestSetOfVertices = function(n, edges) {
    const indegree = new Array(n).fill(0);
    const answer = [];

    for (const [x,y] of edges) {
        indegree[y]++;
    }

    for (let i = 0; i < edges.length; i++) {
        if (indegree[i] === 0) {
            answer.push(i);
        }
    }

    return answer;
};

function main() {
    console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]));
    console.log(findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]]));
}

main();