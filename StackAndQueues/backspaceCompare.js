var backspaceCompare = function(s, t) {
    const typedStringS = getTypedString(s);
    const typedStringT = getTypedString(t);

    return typedStringS === typedStringT;
};

function getTypedString(string) {
    const stack = [];

    for (const character of string) {
        if (character === "#") {
            stack.pop();
        } else {
            stack.push(character);
        }
    }

    let answer = "";

    for (const character of stack) {
        answer += character;
    }

    return answer;
}

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));