var platesBetweenCandles = function(s, queries) {
    const n = s.length;
    const result = [];
    
    // Step 1: Create prefix sum for plates and nearest candle arrays
    const prefixPlates = new Array(n).fill(0);
    const nearestLeftCandle = new Array(n).fill(-1);
    const nearestRightCandle = new Array(n).fill(-1);
    
    // Step 2: Fill prefix sum array and nearest left candle array
    let platesCount = 0;
    let lastCandleIndex = -1;
    
    for (let i = 0; i < n; i++) {
        if (s[i] === '*') {
            platesCount++;
        } else if (s[i] === '|') {
            lastCandleIndex = i;
        }
        prefixPlates[i] = platesCount;
        nearestLeftCandle[i] = lastCandleIndex;
    }
    
    // Step 3: Fill nearest right candle array
    lastCandleIndex = -1;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '|') {
            lastCandleIndex = i;
        }
        nearestRightCandle[i] = lastCandleIndex;
    }
    
    // Step 4: Process each query
    for (const [left, right] of queries) {
        // Find the nearest right candle from the left side of the query
        const rightCandle = nearestRightCandle[left];
        // Find the nearest left candle from the right side of the query
        const leftCandle = nearestLeftCandle[right];
        
        // If there's no valid candle range, the answer is 0
        if (
            rightCandle === -1 || 
            leftCandle === -1 || 
            rightCandle >= leftCandle
        ) {
            result.push(0);
        } else {
            // Calculate the number of plates between the valid candle range
            result.push(prefixPlates[leftCandle] - prefixPlates[rightCandle]);
        }
    }
    
    return result;
};
