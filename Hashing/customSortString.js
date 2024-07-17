var customSortString = function(order, s) {
    const mapS = new Map();
    let newString = "";

    for (const character of s) {
        mapS.set(character, (mapS.get(character) || 0) + 1);
    }

    for (let i = 0; i < order.length; i++) {
        if (mapS.has(order[i])) {
            while (mapS.get(order[i]) > 0) {
                newString += order[i];
                const frequency = mapS.get(order[i]) - 1;
                mapS.set(order[i], frequency);

                if (frequency === 0) {
                    mapS.delete(order[i]);
                }
            }
        }
    }

    for (let [key, value] of mapS) {
        while (value > 0) {
            newString += key;
            value--;
        }
    }

    return newString;
};

console.log(customSortString("cba", "abcd")); //"cbad"
console.log(customSortString("bcafg", "abcd")); //"bcad"
console.log(customSortString("hgfedcba", "abcdefg")) //"gfedcba"
console.log(customSortString("xyz", "xxyyzz")) //"xxyyzz"
console.log(customSortString("abcde", "defabc")) //"abcdef"
console.log(customSortString("zxvutsrqponmlkjihgfedcba", "hello")) //"ollhe"