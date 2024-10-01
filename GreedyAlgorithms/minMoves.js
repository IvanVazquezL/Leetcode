/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    if (maxDoubles === 0) return target - 1;
    let moves = 0;

    while (target > 1) {
        if (maxDoubles > 0 && target % 2 === 0) {
            target /= 2;
            maxDoubles--;
        } else {
            target -= 1;
        }

        moves++;
    }

    return moves;
};