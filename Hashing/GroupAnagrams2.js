var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const orderedString = [...str].sort().join();
        map.set(orderedString, [...map.get(orderedString) || [], str]);
    }

    return [...map.values()];
};