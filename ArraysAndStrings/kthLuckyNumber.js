var kthLuckyNumber = function(k) {
    // Increment k to account for 1-based indexing
    k = k + 1;

    let binaryString = k.toString(2).substring(1);

    // Replace '0' with '4' and '1' with '7' in the binary string
    let kthLuckyNum = binaryString.split('').map(char => {
        return char === '1' ? '7' : '4';
    }).join('');

    return kthLuckyNum;
};