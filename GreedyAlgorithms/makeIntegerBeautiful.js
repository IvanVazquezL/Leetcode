/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
    let currentNumber = n;
    let sumDigits = sumOfDigits(currentNumber);

    if (sumDigits <= target) return 0;

    let multiplier = 1;
    let x = 0;

    while (sumOfDigits(currentNumber) > target) {
        let remainder = 10 - (currentNumber % 10);
        x += remainder * multiplier;
        currentNumber += remainder;
        currentNumber = Math.floor(currentNumber / 10);
        multiplier *= 10;
    }

    return x;
};

function sumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number/10);
    }

    return sum;
}