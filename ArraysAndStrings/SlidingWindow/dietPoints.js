
function dietPoints(calories, k, lower, upper) {
    let points = 0;
    let currentSum = 0;
    // Calculate the sum of the first `k` days
    for (let i = 0; i < k; i++) {
        currentSum += calories[i];
    }

    // Check the initial window
    if (currentSum < lower) {
        points--;
    } else if (currentSum > upper) {
        points++;
    }

    // Now use the sliding window approach for the rest of the days
    for (let i = k; i < calories.length; i++) {
        // Slide the window: add the next day's calories and remove 
        // the first day's calories from the window
        currentSum += calories[i] - calories[i - k];

        // Check the new window sum and adjust points
        if (currentSum < lower) {
            points--;
        } else if (currentSum > upper) {
            points++;
        }
    }
    return points;
}