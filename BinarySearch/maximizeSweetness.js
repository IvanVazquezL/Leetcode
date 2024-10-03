var maximizeSweetness = function(sweetness, k) {
    let numberOfPeople = k + 1;
    let left = Math.min(...sweetness);
    let right = Math.floor(sweetness.reduce((sum,sweet) => sum + sweet, 0) / numberOfPeople);

    while (left < right) {
        const mid = Math.floor((left + right + 1)/2);
        let currentSweetness = 0;
        let peopleWithChocolate = 0;

        for (const sweet of sweetness) {
            currentSweetness += sweet;

            if (currentSweetness >= mid) {
                peopleWithChocolate += 1;
                currentSweetness = 0;
            }

        }

        if (peopleWithChocolate >= numberOfPeople) {
            left = mid;
        } else {
            right = mid - 1;
        }   
    }
    return right;
}

console.log(maximizeSweetness([1,2,3,4,5,6,7,8,9], 5));