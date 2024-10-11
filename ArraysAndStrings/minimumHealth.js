var minimumHealth = function(damage, armor) {
    let sum = 0;
    let maxDamage = -Infinity
    for (let d of damage) {
        sum += d;
        maxDamage = Math.max(maxDamage, d);
    }

    sum -= maxDamage
    sum += armor > maxDamage ? 0 : Math.abs(maxDamage - armor);

    return sum + 1;
};