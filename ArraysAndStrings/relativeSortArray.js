var relativeSortArray = function(arr1, arr2) {
    const map = new Map();
    
    for (const num of arr2) {
        if (!map.has(num)) {
            map.set(num, 0);
        }
    }
    
    const otherNums = [];
    
    for (const num of arr1) {
        if (!map.has(num)) {
            otherNums.push(num);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }
    
    const newArray = [];
    for (let i = 0; i < arr2.length; i++) {
        let counts = map.get(arr2[i]);
        
        while (counts > 0) {
            newArray.push(arr2[i]);
            counts--;
        }
    }
    
    otherNums.sort((a,b) => a - b);
    
    return [...newArray,...otherNums];
};