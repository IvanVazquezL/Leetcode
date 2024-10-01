/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0) return [];
    let sum = 0;
    const answer = [];
    let i = 2;

    while (sum + i <= finalSum) {
        sum += i;
        answer.push(i);
        i += 2;
    }

    if (sum !== finalSum) {
        answer[answer.length - 1] = answer[answer.length - 1] + (finalSum - sum);
    }

    return [...answer];
};