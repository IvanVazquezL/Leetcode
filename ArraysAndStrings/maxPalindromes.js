function maxPalindromes(s, k) {
    const n = s.length;
    let ans = 0;
    let start = 0;

    for (let center = 0; center < 2 * n; center++) {
        let left = Math.floor(center / 2);
        let right = left + (center % 2);

        while (left >= start && right < n && s.charAt(left) === s.charAt(right)) {
            if (right + 1 - left >= k) {
                ans++;
                start = right + 1;
                break;
            }
            left--;
            right++;
        }
    }
    return ans;
}
