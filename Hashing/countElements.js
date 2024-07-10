var countElements = function(arr) {
    const set = new Set();
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] + 1)) counter++;
    }

    return counter;
};

console.log(countElements([1,3,2,3,5,0]));
console.log(countElements([1,2,3]));
console.log(countElements([1,1,3,3,5,5,7,7]));