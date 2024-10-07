var mostVisitedPattern = function(username, timestamp, website) {
    const visits = new Map(); 
    const patternsCount = new Map();

    for (let i = 0; i < username.length; i++) {
        const user = username[i];
        const time = timestamp[i];
        const site = website[i];
        
        if (!visits.has(user)) {
            visits.set(user, []);
        }
        visits.get(user).push({ time, site });
    }

    for (const user of visits.keys()) {
        const visitList = visits.get(user);
        visitList.sort((a, b) => a.time - b.time);
        
        const sites = visitList.map(v => v.site);
        const uniquePatterns = new Set(); 

        const n = sites.length;
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    const pattern = [
                        sites[i], 
                        sites[j], 
                        sites[k]
                    ];
                    uniquePatterns.add(pattern.join(','));
                }
            }
        }

        for (const pattern of uniquePatterns) {
            if (!patternsCount.has(pattern)) {
                patternsCount.set(pattern, 0);
            }
            patternsCount.set(
                pattern, 
                patternsCount.get(pattern) + 1
            );
        }
    }

    let maxScore = 0;
    let bestPattern = "";

    for (const [pattern, score] of patternsCount.entries()) {
        if (
            score > maxScore || 
            (score === maxScore && pattern < bestPattern)
        ) {
            maxScore = score;
            bestPattern = pattern;
        }
    }

    return bestPattern.split(',');
};
