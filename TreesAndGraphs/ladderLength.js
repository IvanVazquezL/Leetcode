var ladderLength = function(beginWord, endWord, wordList) {
    const wordsLength = beginWord.length;
    const graph = getGraph();

    const queue = [[beginWord, 1]];
    const seen = new Set([beginWord]);

    while (queue.length) {
        const node = queue.shift();
        const word = node[0];
        const level = node[1];
        const wordArray = Array.from(word);

        for (let i = 0; i < word.length; i++) {
            const originalCharacter = wordArray[i];
            wordArray[i] = "*";
            const newWord = wordArray.join('');

            for (const neighbor of graph.get(newWord) || []) {
                if (!seen.has(neighbor)) {
                    if (neighbor === endWord) {
                        return level + 1;
                    }

                    seen.add(neighbor);
                    queue.push([neighbor, level + 1]);
                }
            }

            wordArray[i] = originalCharacter;
        }
    }

    return 0;

    function getGraph() {
        const graph = new Map();

        for (const word of wordList) {
            const wordArray = Array.from(word);
            for (let i = 0;  i < wordsLength; i++) {
                const originalCharacter = wordArray[i];
                wordArray[i] = "*";
                const newWord = wordArray.join('');
                if (!graph.has(newWord)) {
                    graph.set(newWord, []);
                }

                graph.get(newWord).push(word);
                wordArray[i] = originalCharacter;
            }
        }
        return graph;
    }
};

function main() {
    console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
}

main();