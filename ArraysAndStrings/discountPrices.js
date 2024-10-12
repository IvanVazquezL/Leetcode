var discountPrices = function(sentence, discount) {
    const words = sentence.split(" ");
    const prices = [];
    const map = new Map()
    const exceptions = ["1e9", "0x3f"];

    for (let i = 0; i < words.length; i++) {
        if (
            words[i].length === 1 ||
            isNaN(Number(words[i]?.substring(1))) ||
            words[i][0] !== "$" ||
            exceptions.includes(words[i].substring(1))
        ) {
            continue;
        }
        const numberString = words[i].substring(1);
        const number = Number(numberString);
        const discountNumber = number * discount/100;
        const price = number - discountNumber;
        words[i] = `$${price.toFixed(2)}`;

    }

    return words.join(' ');
};