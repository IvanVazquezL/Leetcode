var openLock = function(deadends, target) {
    const STARTING_POINT = "0000";
    if (deadends.includes(STARTING_POINT)) {
        return -1;
    }

    const queue = [STARTING_POINT];
    let seen = new Set(deadends);
    seen.add(STARTING_POINT);

    let steps = 0;

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const number = queue.shift();

            if (number === target) {
                return steps;
            }

            for (const neighbor of getNeighbors(number)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        steps++;
    }

    return -1;

    function getNeighbors(number) {
        const neighbors = [];

        for (let i = 0; i < 4; i++) {
            const digit = number[i];

            for (const delta of [-1, 1]) {
                const deltaDigit = (Number(digit) + delta + 10) % 10;
                const numberArray = Array.from(number);
                numberArray[i] = deltaDigit;
                neighbors.push(numberArray.join(''));
            }
        }

        return neighbors;
    }
}

function main() {
    console.log(openLock(["0201","0101","0102","1212","2002"], "0202"));
    console.log(openLock(["8888"], "0009"));
    console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888"));
}

main();