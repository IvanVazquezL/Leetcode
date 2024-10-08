function prisonAfterNDays(cells, n) {
    const seen = new Map();
    let hasCycle = false;
    let cycleLength = 0;

    for (let day = 0; day < n; day++) {
        const nextDayCells = new Array(8).fill(0);

        // Compute the next day's state based on current day's state
        for (let i = 1; i < 7; i++) {
            nextDayCells[i] = (cells[i - 1] === cells[i + 1]) ? 1 : 0;
        }

        const key = nextDayCells.join('');

        console.log(key)

        if (seen.has(key)) {
            // Cycle detected, calculate the cycle length
            hasCycle = true;
            cycleLength = day - seen.get(key);
            break;
        } else {
            seen.set(key, day);
        }

        cells = nextDayCells;
    }

    // If we found a cycle, we can skip the unnecessary steps
    if (hasCycle) {
        n %= cycleLength;
        for (let day = 0; day < n; day++) {
            const nextDayCells = new Array(8).fill(0);

            for (let i = 1; i < 7; i++) {
                nextDayCells[i] = (cells[i - 1] === cells[i + 1]) ? 1 : 0;
            }

            cells = nextDayCells;
        }
    }

    return cells;
}
