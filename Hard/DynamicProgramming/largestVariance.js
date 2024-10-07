function largestVariance(s) {
    const counter = new Array(26).fill(0);
    
    for (const ch of s) {
        counter[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    let globalMax = 0;

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            if (i === j || counter[i] === 0 || counter[j] === 0) {
                continue;
            }

            const major = String.fromCharCode('a'.charCodeAt(0) + i);
            const minor = String.fromCharCode('a'.charCodeAt(0) + j);
            let majorCount = 0;
            let minorCount = 0;

            let restMinor = counter[j];

            for (const ch of s) {
                if (ch === major) {
                    majorCount++;
                }
                if (ch === minor) {
                    minorCount++;
                    restMinor--;
                }

                if (minorCount > 0) {
                    globalMax = Math.max(globalMax, majorCount - minorCount);
                }

                if (majorCount < minorCount && restMinor > 0) {
                    majorCount = 0;
                    minorCount = 0;
                }
            }
        }
    }

    return globalMax;
}