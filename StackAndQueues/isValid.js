var isValid = function(s) {
    const stack = [];
    const openingAndClosingBrackets = new Map();
    openingAndClosingBrackets.set('(', ')');
    openingAndClosingBrackets.set('{', '}');
    openingAndClosingBrackets.set('[', ']');

    for (const character of s) {
        if (!openingAndClosingBrackets.has(character) && stack.length === 0) {
            return false;
        } else if (openingAndClosingBrackets.has(character)) {
            stack.push(character);
        } else if (!openingAndClosingBrackets.has(character) && stack.length > 0) {
            const stackCharacter = stack.pop();

            if (openingAndClosingBrackets.get(stackCharacter) !== character) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('({})'));
console.log(isValid('(]'));
console.log(isValid('({)}'));
console.log(isValid('['));
console.log(isValid('(('));





