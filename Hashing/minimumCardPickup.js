var minimumCardPickup = function(cards) {
    const map = new Map();
    let answer = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (map.has(cards[i])) {
            answer = Math.min(
                answer,
                (i - map.get(cards[i])) + 1
            );
        } 
        
        map.set(cards[i], i);
    }

    return answer === Infinity ? -1 : answer;
};

console.log(minimumCardPickup([3,4,2,3,4,7]));
console.log(minimumCardPickup([1,0,5,3]));