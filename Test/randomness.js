const problems = [
    "https://leetcode.com/problems/contains-duplicate/description/",
    "https://leetcode.com/problems/valid-anagram/description/",
    "https://leetcode.com/problems/two-sum/description/",
    "https://leetcode.com/problems/group-anagrams/description/",
    "https://leetcode.com/problems/top-k-frequent-elements/description/",
    "https://neetcode.io/problems/string-encode-and-decode",
    "https://leetcode.com/problems/product-of-array-except-self/description/",
    "https://leetcode.com/problems/longest-consecutive-sequence/description/",
    "https://leetcode.com/problems/valid-palindrome/description/",
    "https://leetcode.com/problems/3sum/description/",
    "https://leetcode.com/problems/container-with-most-water/description/"
];

function random() {
    const selectedProblems = new Set();
    
    while (selectedProblems.size < 2) {
        const index = Math.floor(Math.random() * problems.length);
        selectedProblems.add(problems[index]);
    }

    return Array.from(selectedProblems);
}

console.log(random());
