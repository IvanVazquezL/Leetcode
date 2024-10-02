/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    let starts = [];
    let ends = [];

    for (let flower of flowers) {
        starts.push(flower[0]);
        ends.push(flower[1] + 1);
    }

    starts.sort((a,b) => a - b);
    ends.sort((a,b) => a - b);

    let answers = [];

    for (let index = 0; index < people.length; index++) {
        const person = people[index];
        const flowersStartedBlooming = binarySearch(starts, person);
        const flowersFinishedBlooming = binarySearch(ends, person);
        answers[index] = flowersStartedBlooming - flowersFinishedBlooming;
    }

    return answers;
};

function binarySearch(array, target) {
    let left = 0;
    let right = array.length;

    console.log(`array = ${array}`)
    console.log(`target = ${target}`)
    while (left < right) {
        console.log(`while (${left} < ${right}) {`)
        const mid = Math.floor((left + right)/2);
        console.log(`   const mid = ${mid}`)
        console.log(`   if (${array[mid]} <= ${target}) {`)
        if (array[mid] <= target) {  
            console.log(`   left = ${mid + 1}`)
            left = mid + 1;
        } else {
            console.log(`   right = ${mid}`)
            right = mid;
        }
    }

    console.log(`   left = ${left}`)
    console.log(`   `)

    return left;
}

//  flowers = [[1,6],[3,7],[9,12],[4,13]]
//  people = [2,3,7,11]
//  [1,2,2,2]

console.log(fullBloomFlowers([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]));