
var generateMatrix = function (n) {
    let answer = Array.from({ length: n }, () => Array(n).fill(0));
    let currentNumber = 1;
    
    for (let layer = 0; layer < Math.floor((n + 1) / 2); layer++) {
        // direction 1 - traverse from left to right
        for (let index = layer; index < n - layer; index++) {
            answer[layer][index] = currentNumber++;
        }
        // direction 2 - traverse from top to bottom
        for (let index = layer + 1; index < n - layer; index++) {
            answer[index][n - layer - 1] = currentNumber++;
        }
        // direction 3 - traverse from right to left
        for (let index = n - layer - 2; index >= layer; index--) {
            answer[n - layer - 1][index] = currentNumber++;
        }
        // direction 4 - traverse from bottom to top
        for (let index = n - layer - 2; index > layer; index--) {
            answer[index][layer] = currentNumber++;
        }
    }
    return answer;
};
