
function totalStrength(st) {
    const MOD = 1_000_000_007;
    const N = st.length;

    // Create prefix sums of strengths
    const prefix = new Array(N + 1).fill(0);
    for (let i = 0; i < N; i++) {
        prefix[i + 1] = (prefix[i] + st[i]) % MOD;
    }

    // Create prefix sums of prefix sums
    const prefixSum = new Array(N + 2).fill(0);
    for (let i = 0; i <= N; i++) {
        prefixSum[i + 1] = (prefixSum[i] + prefix[i]) % MOD;
    }

    // First index on the left < current st
    const left = new Array(N).fill(-1);
    const stack = [];
    
    // Finding left limits using a mono-increasing stack
    for (let i = 0; i < N; i++) {
        while (stack.length && st[stack[stack.length - 1]] >= st[i]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    // First index on the right <= current st
    const right = new Array(N).fill(N);
    stack.length = 0; // Clear the stack for reuse

    for (let i = N - 1; i >= 0; i--) {
        while (stack.length && st[stack[stack.length - 1]] > st[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? N : stack[stack.length - 1];
        stack.push(i);
    }

    // Calculate the result
    let res = 0;
    for (let i = 0; i < N; i++) {
        res += ((prefixSum[right[i] + 1] - prefixSum[i + 1]) * (i - left[i]) % MOD +
                  MOD * 2 - 
                  (prefixSum[i + 1] - prefixSum[left[i] + 1]) * (right[i] - i) % MOD) % MOD * st[i] % MOD;
        res %= MOD;
    }

    return res;
}