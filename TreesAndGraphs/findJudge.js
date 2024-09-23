/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const outdegree = new Array(n + 1).fill(0);
    const indegree = new Array(n + 1).fill(0);
    let answer = -1;

    for (const [x,y] of trust) {
        outdegree[x]++;
        indegree[y]++;
    }

    for (let i = 1; i <= n; i++) {
        if (outdegree[i] === 0 && indegree[i] === n - 1) {
            answer = i;
        }
    }

    return answer;
};

function main() {
    console.log(findJudge(2, [[1,2]]));
    console.log(findJudge(3, [[1,3],[2,3]]));
    console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
    console.log(findJudge(3, [[1,2],[2,3]]));
}

main();