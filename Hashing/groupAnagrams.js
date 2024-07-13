var groupAnagrams = function(strs) {
    const map = new Map();
    const group = [];

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        map.set(sortedStr, [...(map.get(sortedStr)) || [], str])
    }

    for (const value of map.values()) {
        group.push(value);
    }
    
    return group;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

