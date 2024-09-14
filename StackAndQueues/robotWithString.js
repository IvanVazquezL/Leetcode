function robotWithString(s) {
    const stackT = [];
    const resultP = [];

    // Determine the lexicographically smallest character from each index to the end of s
    const minCharFromRight = Array(s.length);
    minCharFromRight[s.length - 1] = s[s.length - 1];

    for (let i = s.length - 2; i >= 0; i--) {
        minCharFromRight[i] = s[i] < minCharFromRight[i + 1] ? s[i] : minCharFromRight[i + 1];
    }

    for (let i = 0; i < s.length; i++) {
        //  Robot moves char from s to stackT
        stackT.push(s[i]); 

        while (!isStackEmpty() && (isLastCharacter(i) || isTopOfStackSmallerOrEqual(i))) {
            resultP.push(stackT.pop());
        }
    }

    return resultP.join('');

    function isStackEmpty() {
        return stackT.length === 0;
    }

    function isLastCharacter(i) {
        return i === s.length - 1;
    }

    // Helper function to check if the top of the stack is less than or equal to the next min char
    function isTopOfStackSmallerOrEqual(i) {
        return stackT[stackT.length - 1] <= minCharFromRight[i + 1];
    }
}

function main() {
    console.log(robotWithString("zza"));
    console.log(robotWithString("bac"));
    console.log(robotWithString("bdda"));
}

main();