var isArmstrong = function(n) {
    const numberString = n.toString();
    let sum = 0;
    const length = numberString.length;
    
    for (let i = 0; i < length; i++) {
        sum += Math.pow(parseInt(numberString[i]), length); 
    }
        
    return sum === n
};