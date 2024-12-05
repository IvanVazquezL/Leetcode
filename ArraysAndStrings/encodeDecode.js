function encode(strs) {
    let answer = '';
    for (const str of strs) {
        answer += `${str.length}:${str}`
    }

    return answer;
}

function decode(str) {
    const answer = [];
    let length = '';

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            length += str[i];
        }

        if (str[i] === ":") {
            length = Number(length);
            answer.push(str.slice(i + 1, i + length + 1));
            i = i + length;
            length = ''
        }
    }

    return answer;
}

console.log(encode(["neet","code","love","you"]));
console.log(decode("4:neet4:code4:love3:you"));