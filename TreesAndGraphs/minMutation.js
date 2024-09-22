/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const STARTING_POINT = startGene;

    const queue = [STARTING_POINT];
    let seen = new Set([STARTING_POINT]);

    let steps = 0;

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentGene = queue.shift();

            if (currentGene === endGene) {
                return steps;
            }

            for (const neighbor of getNeighbors(currentGene)) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    
        steps++;
    }

    return -1;

    function getNeighbors(gene) {
        const neighbors = [];
        const geneCharacters = ['A', 'C', 'G', 'T'];
        const arrayGene = Array.from(gene); // Convert once at the beginning
    
        for (let i = 0; i < gene.length; i++) {
            const originalChar = arrayGene[i]; // Save the original character
    
            for (const character of geneCharacters) {
                if (character !== originalChar) { // Only change if different
                    arrayGene[i] = character;
                    const newGene = arrayGene.join('');
    
                    if (bank.includes(newGene)) { // Use Set for faster lookup
                        neighbors.push(newGene);
                    }
                }
            }
    
            arrayGene[i] = originalChar; // Restore original character
        }
        return neighbors;
    } 
};

function main() {
    console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
    console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]))
}

main();