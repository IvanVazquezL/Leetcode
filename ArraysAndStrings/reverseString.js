var reverseString = function(s) {
    _reverseString(0, s.length - 1, s);
    console.log(s)
};

function _reverseString(left, right, s) {
    if (left >= right) return;
    
    const temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    
    _reverseString(left + 1, right - 1, s)
}

reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"]);