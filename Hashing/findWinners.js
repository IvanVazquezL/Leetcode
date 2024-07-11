var findWinners = function(matches) {
    const winners = new Map();
    const losers = new Map();
    const wonAllMatches = [];
    const lostOneMatch = [];

    for (const [winner, loser] of matches) {
        winners.set(winner, (winners.get(winner) || 0) + 1);
        losers.set(loser, (losers.get(loser) || 0) + 1);
    }

    for (const [loser, matchesLost] of losers) {
        if (matchesLost === 1) lostOneMatch.push(loser);
        if (winners.has(loser)) winners.delete(loser);
    }

    for (const winner of winners.keys()) {
        wonAllMatches.push(winner);
    }

    wonAllMatches.sort((a,b) => a - b);
    lostOneMatch.sort((a,b) => a - b);

    return [wonAllMatches, lostOneMatch];
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]));