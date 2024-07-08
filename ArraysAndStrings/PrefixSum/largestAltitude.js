var largestAltitude = function(gain) {
    let largestAltitude = 0;
    let currentAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        largestAltitude = Math.max(largestAltitude, currentAltitude);
    }

    return largestAltitude;
};

console.log(largestAltitude([-5,1,5,0,-7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))