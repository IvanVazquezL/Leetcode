var isPathCrossing = function(path) {
    const set = new Set();
    const position = [0,0];
    set.add(position.join(','));

    for (const direction of path) {
        if (direction === "N") {
            position[0] += 1;
        } else if (direction === "E") {
            position[1] += 1;
        } else if (direction === "S") {
            position[0] -= 1;
        } else {
            position[1] -= 1;
        }

        const stringPosition = position.join(',');
        if (set.has(stringPosition)) return true;
        set.add(stringPosition);
    }

    return false;
};

//console.log(isPathCrossing("NES"));
//console.log(isPathCrossing("NESWW"));
console.log(isPathCrossing("NNSWWEWSSESSWENNW"));