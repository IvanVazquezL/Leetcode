/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;
    const answer = [];
    const path = [0];
    backtrack(0, path);

    return answer;

    function backtrack(currentNode, path) {
        if (currentNode === target) {
            answer.push([...path]);
            return;
        }

        for (const nextNode of graph[currentNode]) {
            path.push(nextNode);
            backtrack(nextNode, path);
            path.pop();
        }
    }
};