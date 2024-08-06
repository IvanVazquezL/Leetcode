var dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = [];

    for (let i = 0; i < temperatures.length; i++) {
        answer[i] = 0;

        while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            answer[index] = i - index;
        }

        stack.push(i);
    }

    return answer;
};

function main() {
    console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
    //[1,1,4,2,1,1,0,0]
    console.log(dailyTemperatures([30,40,50,60]));
    console.log(dailyTemperatures([30,60,90]));


}

main();