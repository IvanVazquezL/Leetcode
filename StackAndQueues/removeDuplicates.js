var removeDuplicates = function(s) {
    const stack = [];

    for (const character of s) {
        if (stack[stack.length - 1] === character) {
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
};

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("abccba"));