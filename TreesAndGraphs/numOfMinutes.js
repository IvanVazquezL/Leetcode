var numOfMinutes = function(numberOfEmployees, headID, manager, informTime) {
    const graph = getGraph();
    let maxTime = -Infinity;

    dfs(headID, 0);

    return maxTime;

    function dfs(manager, time) {
        maxTime = Math.max(maxTime, time);

        for (const subordinate of graph.get(manager) || []) {
            dfs(subordinate, time + informTime[manager]);
        }
    }

    function getGraph() {
        const graph = new Map();

        for (let employee = 0; employee < numberOfEmployees; employee++) {
            if (manager[employee] === -1) continue;

            if (!graph.has(manager[employee])) {
                graph.set(manager[employee], []);
            }

            graph.get(manager[employee]).push(employee);
        }

        return graph;
    }
};

function main() {
    console.log(numOfMinutes(1, 0, [-1], [0]));
    console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]));
}

main();