var distributeCookies = function(nums, k) {
    let answer = Infinity;
    // Initialize array to store the number of cookies per child
    const cookiesPerChild = new Array(k).fill(0); 
    backtrack(0, nums, cookiesPerChild, k);
    return answer;
    
    function backtrack(start, nums, cookiesPerChild, k) {
        if (start === nums.length) {
            let maxCookies = -Infinity;
            for (let i = 0; i < k; i++) {
                maxCookies = Math.max(maxCookies, cookiesPerChild[i]);
                console.log({
                    child: i,
                    cookiesPerChild: cookiesPerChild[i],
                    maxCookies
                })
            }
            answer = Math.min(answer, maxCookies);
            console.log({
                answer
            })
            return;
        }

        for (let i = 0; i < k; i++) {
            cookiesPerChild[i] += nums[start];
            backtrack(start + 1, nums, cookiesPerChild, k);
            cookiesPerChild[i] -= nums[start];
        }
    }
};
