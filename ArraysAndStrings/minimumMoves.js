var minimumMoves = function(s) {
    let moves = 0;
    let index = 0;

    while (index < s.length) {
        if (s[index] === "X") {
            index += 3;
            moves++;
        } else {
            index++;
        }
    }

    return moves;
};