var makeGood = function(s) {
    const stack = [];
    stack.push(s[0]);

    for (let i = 1; i < s.length; i++) {
        const character = s[i];

        if (stack.length && areOppositeCaseVersions(stack[stack.length - 1], character)) {
            stack.pop();
        } else {
            stack.push(character);
        }
    }

    return stack.join('');
};

function areOppositeCaseVersions(char1, char2) {
    return char1.toUpperCase() === char2.toUpperCase() && char1 !== char2;
}

console.log(makeGood("leEeetcode"));
console.log(makeGood("s"));
console.log(makeGood("abBAcC"));
console.log(makeGood("mMnNoO"));