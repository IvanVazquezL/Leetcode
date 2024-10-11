/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    // Array to store the count of each character
    const charCounts = new Array(26).fill(0);
    for (let char of s) {
        charCounts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Max heap, sorted by the count of characters
    const pq = [];
    for (let i = 0; i < 26; i++) {
        if (charCounts[i] > 0) {
            pq.push(
                [String.fromCharCode(i + 'a'.charCodeAt(0)), 
                charCounts[i]]
            );
        }
    }

    // Max heap comparator function
    pq.sort((a, b) => b[1] - a[1]);

    const sb = [];

    while (pq.length > 0) {
        // Get the character with the highest frequency
        let first = pq.shift(); 
        if (sb.length === 0 || sb[sb.length - 1] !== first[0]) {
            sb.push(first[0]);
            if (--first[1] > 0) {
                // Reinsert the character if there are more of it
                pq.push(first); 
            }
        } else {
            // If no valid reorganization is possible
            if (pq.length === 0) {
                return ""; 
            }

            // Get the second most frequent character
            let second = pq.shift(); 
            sb.push(second[0]);
            if (--second[1] > 0) {
                // Reinsert the character if there are more of it
                pq.push(second); 
            }

            // Reinsert the first character back into the heap
            pq.push(first); 
        }

        // Re-sort the heap after each insertion
        pq.sort((a, b) => b[1] - a[1]);
    }

    return sb.join('');
};
