var getHappyString = function(n, k) {
    const result = [];
    const letters = ['a', 'b', 'c'];

    // Start the backtracking process
    backtrack("");

    // Return the k-th happy string or empty string if not enough happy strings
    return result.length >= k ? result[k - 1] : "";

    // Backtracking function to build happy strings
    function backtrack(currentString) {
        if (currentString.length === n) {
            result.push(currentString);
            return;
        }

        for (let letter of letters) {
            if (currentString.length === 0 || currentString[currentString.length - 1] !== letter) {
                backtrack(currentString + letter);
                if (result.length === k) {
                    return; // Early exit once we reach the k-th string
                }
            }
        }
    }
};
