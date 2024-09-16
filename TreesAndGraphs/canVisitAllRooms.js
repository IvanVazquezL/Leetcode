var canVisitAllRooms = function(rooms) {
    const seen = new Set();
    seen.add(0);
    dfs(0);

    return rooms.length === seen.size;

    function dfs(node) {
        for (const neighbor of rooms[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                dfs(neighbor);
            }
        }
    } 
};

function main() {
    console.log(canVisitAllRooms([[1],[2],[3],[]]));
    console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));

}

main();