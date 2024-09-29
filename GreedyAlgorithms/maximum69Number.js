/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let digitsArray = num
        .toString()
        .split('')
        .map(numberStr => parseInt(numberStr));
    let maxNumber = num

    for (let i = 0; i < digitsArray.length; i++) {
        const originalDigit = digitsArray[i];
        if (originalDigit === 6) {
            digitsArray[i] = 9
        }

        const newNumber = digitsArray.join('');

        maxNumber = Math.max(maxNumber, newNumber);
        digitsArray[i] = originalDigit
    }

    return maxNumber;
};