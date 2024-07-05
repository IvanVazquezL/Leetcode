var mergeSortedArrays = function(arrayA, arrayB) {
    return _mergeSortedArrays(0, 0, arrayA, arrayB, []);
}

function _mergeSortedArrays(indexA, indexB, arrayA, arrayB, ans) {
    if (indexA === arrayA.length - 1) {
        ans.push(arrayA[indexA])
        return [...ans, ...arrayB.splice(indexA)];
    }

    if (indexB === arrayB.length - 1) {
        ans.push(arrayB[indexB])
        return [...ans, ...arrayA.splice(indexB)];
    }

    if (arrayA[indexA] < arrayB[indexB]) {
        ans.push(arrayA[indexA])
        return _mergeSortedArrays(indexA + 1, indexB, arrayA, arrayB, ans)
    } else {
        ans.push(arrayB[indexB])
        return _mergeSortedArrays(indexA, indexB + 1, arrayA, arrayB, ans)
    }
}

console.log(mergeSortedArrays([1, 4, 7, 20], [3, 5, 6]));