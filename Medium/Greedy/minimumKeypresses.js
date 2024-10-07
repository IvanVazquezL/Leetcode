function minimumKeypresses(s) {
    const count = new Array(26).fill(0);
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Sort the frequency array in descending order
    count.sort((a, b) => b - a);

    for (let i = 0; i < 26; i++) {
        // Characters with max frequencies (1 press)
        if (i < 9) { 
            answer += count[i];

        // Characters with intermediate frequencies (2 presses)
        } else if (i < 18) { 
            answer += 2 * count[i];

        // Least frequent characters (3 presses)
        } else { 
            answer += 3 * count[i];
        }
    }

    return answer;
}
