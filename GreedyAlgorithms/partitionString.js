var partitionString = function(s) {
    let set = new Set();
    let partition = 1;

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i])
        } else {
            set.clear();
            set.add(s[i]);
            partition++;
        }
    }

    return partition;
};