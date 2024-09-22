var calcEquation = function(equations, values, queries) {
    const graph = getGraph();
    const answers = [];

    for (const [numerator, denominator] of queries) {
        const answer = getAnswer(numerator, denominator);
        answers.push(answer);
    }

    return answers;

    function getAnswer(source, destination) {
        if (!graph.has(source)) {
            return -1;
        }

        const seen = new Set([source]);
        return dfs(source, 1);

        function dfs(node, ratio) {
            if (node === destination) {
                return ratio;
            }

            for (const [neighbor, value] of graph.get(node)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    const result = dfs(neighbor, ratio * value);
                    if (result !== -1) {
                        return result;
                    }
                }
            }

            return -1;
        }
    
    }


    function getGraph() {
        const graph = new Map();

        for (let i = 0; i < equations.length; i++) {
            const [numerator, denominator] = equations[i];
            const value = values[i];

            if (!graph.has(numerator)) {
                graph.set(numerator, new Map());
            }

            if (!graph.has(denominator)) {
                graph.set(denominator, new Map());
            }

            graph.get(numerator).set(denominator, value);
            graph.get(denominator).set(numerator, 1/value);
        }

        return graph;
    }
}

function main() {
    console.log(calcEquation(
        [["a","b"],["b","c"]], 
        [2.0,3.0], 
        [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
    ));
}

main();