var destCity = function(paths) {
    const map = new Map();

    for (const [origin, destination] of paths) {
        map.set(origin, destination);
    }

    for (const value of map.values()) {
        if (!map.has(value)) return value;
    }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
console.log(destCity([["B","C"],["D","B"],["C","A"]]));
console.log(destCity([["A","Z"]]));